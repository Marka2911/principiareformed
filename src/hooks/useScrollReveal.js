import { useLayoutEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const MAX_DELAY = 140;

// Content is visible by default. Only a running, finite animation changes it.
// One observer serves the current route; no scroll state or per-card hooks.
export default function useScrollReveal(scopeRef, visitKey) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const preference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const registered = new Set();
    const finished = new Set();
    const timers = new Map();
    let observer;

    const finish = (element) => {
      window.clearTimeout(timers.get(element));
      timers.delete(element);
      finished.add(element);
      element.dataset.revealState = "done";
      element.style.removeProperty("--reveal-delay");
      observer?.unobserve(element);
    };

    const reveal = (element) => {
      if (finished.has(element) || element.dataset.revealState === "active") return;
      observer?.unobserve(element);

      if (preference?.matches || element.contains(document.activeElement)) {
        finish(element);
        return;
      }

      const requestedDelay = Number(element.dataset.revealDelay) || 0;
      const delay = Math.max(0, Math.min(requestedDelay, MAX_DELAY));
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.dataset.revealState = "active";

      // Also release the animation if animationend is lost or CSS fails to load.
      timers.set(element, window.setTimeout(() => finish(element), 1000));
    };

    try {
      if (typeof window.IntersectionObserver === "function") {
        observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) reveal(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
        );
      }
    } catch {
      // A failed observer must never hide any part of the page.
      observer = undefined;
    }

    const register = (elements) => {
      // Batch geometry reads before changing animation attributes.
      const candidates = elements
        .filter((element) => !registered.has(element))
        .map((element) => ({ element, bounds: element.getBoundingClientRect() }));

      candidates.forEach(({ element, bounds }) => {
        registered.add(element);
        if (!observer || preference?.matches || bounds.bottom <= 0) {
          finish(element);
        } else if (bounds.top < window.innerHeight - 32) {
          reveal(element);
        } else {
          observer.observe(element);
        }
      });
    };

    const onAnimationEnd = (event) => {
      if (
        registered.has(event.target) &&
        (event.animationName === "principia-reveal-up" ||
          event.animationName === "principia-reveal-fade")
      ) {
        finish(event.target);
      }
    };

    const onFocus = (event) => {
      // Keyboard navigation never waits for an entrance, including its parents.
      let element = event.target.closest(REVEAL_SELECTOR);
      while (element && scope.contains(element)) {
        finish(element);
        element = element.parentElement?.closest(REVEAL_SELECTOR);
      }
    };

    const onPreferenceChange = () => {
      if (preference.matches) {
        observer?.disconnect();
        registered.forEach(finish);
      }
    };

    scope.addEventListener("animationend", onAnimationEnd);
    scope.addEventListener("focusin", onFocus);
    preference?.addEventListener?.("change", onPreferenceChange);
    register(Array.from(scope.querySelectorAll(REVEAL_SELECTOR)));

    // Conditional content (such as a selected team profile) uses the same API.
    const mutations = typeof window.MutationObserver === "function"
      ? new window.MutationObserver((records) => {
          const added = [];
          records.forEach((record) => {
            record.removedNodes.forEach((node) => {
              if (node.nodeType !== 1) return;
              const removed = [node, ...node.querySelectorAll(REVEAL_SELECTOR)];
              removed.forEach((element) => {
                observer?.unobserve(element);
                window.clearTimeout(timers.get(element));
                timers.delete(element);
                registered.delete(element);
                finished.delete(element);
              });
            });
            record.addedNodes.forEach((node) => {
              if (node.nodeType !== 1) return;
              if (node.matches(REVEAL_SELECTOR)) added.push(node);
              added.push(...node.querySelectorAll(REVEAL_SELECTOR));
            });
          });
          register(added);
        })
      : undefined;
    mutations?.observe(scope, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations?.disconnect();
      scope.removeEventListener("animationend", onAnimationEnd);
      scope.removeEventListener("focusin", onFocus);
      preference?.removeEventListener?.("change", onPreferenceChange);
      timers.forEach((timer) => window.clearTimeout(timer));
      registered.forEach((element) => {
        delete element.dataset.revealState;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [scopeRef, visitKey]);
}
