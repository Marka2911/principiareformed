import { StrictMode, useRef } from "react";
import { act, fireEvent, render } from "@testing-library/react";
import useScrollReveal from "./useScrollReveal";

function Scene({ visit = "first", extra = false }) {
  const scope = useRef(null);
  useScrollReveal(scope, visit);
  return (
    <div ref={scope}>
      <div data-testid="initial" data-reveal>Introduction</div>
      <div data-testid="below" data-reveal data-below data-reveal-delay="70">
        <button>Continue</button>
      </div>
      {extra && <div data-testid="extra" data-reveal data-below>More content</div>}
    </div>
  );
}

let observers;
let preference;
let changePreference;
let originalObserver;
let originalMatchMedia;

beforeEach(() => {
  jest.useFakeTimers();
  observers = [];
  originalObserver = window.IntersectionObserver;
  originalMatchMedia = window.matchMedia;
  preference = {
    matches: false,
    addEventListener: jest.fn((event, callback) => { changePreference = callback; }),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => preference);
  window.IntersectionObserver = jest.fn((callback) => {
    const observer = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      enter: (element) => callback([{ target: element, isIntersecting: true }]),
    };
    observers.push(observer);
    return observer;
  });
  jest.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function () {
    const top = this.hasAttribute("data-below") ? 1500 : 150;
    return { top, bottom: top + 100, left: 0, right: 100, width: 100, height: 100 };
  });
});

afterEach(() => {
  window.IntersectionObserver = originalObserver;
  window.matchMedia = originalMatchMedia;
  jest.restoreAllMocks();
  jest.useRealTimers();
});

function completeAnimation(element) {
  const event = new Event("animationend", { bubbles: true });
  Object.defineProperty(event, "animationName", { value: "principia-reveal-up" });
  fireEvent(element, event);
}

test("reveals initial content without scrolling and later groups once per visit", () => {
  const { getByTestId } = render(<Scene />);
  const initial = getByTestId("initial");
  const below = getByTestId("below");
  expect(initial).toHaveAttribute("data-reveal-state", "active");
  // Below-the-fold content is never given a hidden/pending state.
  expect(below).not.toHaveAttribute("data-reveal-state");
  expect(observers[0].observe).toHaveBeenCalledWith(below);

  act(() => observers[0].enter(below));
  expect(below).toHaveAttribute("data-reveal-state", "active");
  expect(below.style.getPropertyValue("--reveal-delay")).toBe("70ms");
  completeAnimation(below);
  expect(below).toHaveAttribute("data-reveal-state", "done");
  act(() => observers[0].enter(below));
  expect(below).toHaveAttribute("data-reveal-state", "done");
});

test("reduced motion starts with all content available and no entrances", () => {
  preference.matches = true;
  const { getByTestId } = render(<Scene />);
  expect(getByTestId("initial")).toHaveAttribute("data-reveal-state", "done");
  expect(getByTestId("below")).toHaveAttribute("data-reveal-state", "done");
  expect(observers[0].observe).not.toHaveBeenCalled();
  expect(jest.getTimerCount()).toBe(0);
});

test("changing to reduced motion immediately finishes active and upcoming groups", () => {
  const { getByTestId } = render(<Scene />);
  act(() => {
    preference.matches = true;
    changePreference();
  });
  expect(getByTestId("initial")).toHaveAttribute("data-reveal-state", "done");
  expect(getByTestId("below")).toHaveAttribute("data-reveal-state", "done");
  expect(observers[0].disconnect).toHaveBeenCalled();
  expect(jest.getTimerCount()).toBe(0);
});

test.each(["missing", "failed"])("a %s IntersectionObserver leaves content visible", (mode) => {
  window.IntersectionObserver = mode === "missing"
    ? undefined
    : jest.fn(() => { throw new Error("Observer unavailable"); });
  const { getByTestId } = render(<Scene />);
  expect(getByTestId("initial")).toHaveAttribute("data-reveal-state", "done");
  expect(getByTestId("below")).toHaveAttribute("data-reveal-state", "done");
  expect(jest.getTimerCount()).toBe(0);
});

test("keyboard focus exposes its content group immediately", () => {
  const { getByRole, getByTestId } = render(<Scene />);
  act(() => getByRole("button").focus());
  expect(getByRole("button")).toHaveFocus();
  expect(getByTestId("below")).toHaveAttribute("data-reveal-state", "done");
  act(() => observers[0].enter(getByTestId("below")));
  expect(getByTestId("below")).toHaveAttribute("data-reveal-state", "done");
});

test("a lost animationend cannot leave an entrance active indefinitely", () => {
  const { getByTestId } = render(<Scene />);
  act(() => jest.advanceTimersByTime(1000));
  expect(getByTestId("initial")).toHaveAttribute("data-reveal-state", "done");
  expect(jest.getTimerCount()).toBe(0);
});

test("conditional content joins the same viewport observer", async () => {
  const { getByTestId, rerender } = render(<Scene />);
  rerender(<Scene extra />);
  await act(async () => { await Promise.resolve(); });
  expect(observers).toHaveLength(1);
  expect(observers[0].observe).toHaveBeenCalledWith(getByTestId("extra"));
  act(() => observers[0].enter(getByTestId("extra")));
  expect(getByTestId("extra")).toHaveAttribute("data-reveal-state", "active");
});

test("route visits restart entrances and release previous observers and timers", () => {
  const { getByTestId, rerender, unmount } = render(<Scene />);
  completeAnimation(getByTestId("initial"));
  rerender(<Scene visit="next" />);
  expect(observers[0].disconnect).toHaveBeenCalled();
  expect(getByTestId("initial")).toHaveAttribute("data-reveal-state", "active");
  unmount();
  expect(observers[1].disconnect).toHaveBeenCalled();
  expect(preference.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  expect(jest.getTimerCount()).toBe(0);
});

test("StrictMode leaves only the current observer and clears motion state on unmount", () => {
  const { getByTestId, unmount } = render(<StrictMode><Scene /></StrictMode>);
  const initial = getByTestId("initial");
  expect(observers).toHaveLength(2);
  expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
  expect(initial).toHaveAttribute("data-reveal-state", "active");
  unmount();
  expect(initial).not.toHaveAttribute("data-reveal-state");
  expect(observers[1].disconnect).toHaveBeenCalledTimes(1);
  expect(jest.getTimerCount()).toBe(0);
});
