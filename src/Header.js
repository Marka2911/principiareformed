import { useCallback, useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "./assets/logo_principia.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const menuToggleRef = useRef(null);
  const location = useLocation();
  const closeMobileMenu = useCallback(() => {
    const navigation = headerRef.current?.querySelector("#mobile-navigation");
    if (navigation?.contains(document.activeElement)) {
      if (window.matchMedia("(min-width: 1101px)").matches) {
        headerRef.current?.querySelector(".header-section-wrapper")?.focus();
      } else {
        menuToggleRef.current?.focus();
      }
    }
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    let wasScrolled = false;
    const updateScrolled = () => {
      const isScrolled = window.scrollY > 12;
      if (isScrolled !== wasScrolled) {
        wasScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.key, closeMobileMenu]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) closeMobileMenu();
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, [closeMobileMenu]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const closeOnOutsidePress = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMobileMenu();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [menuOpen, closeMobileMenu]);

  const menuItems = [
    { name: "Qui som?", path: "/qui-som" },
    { name: "Projectes", path: "/projectes" },
    { name: "Els nostres valors", path: "/valors" },
    { name: "Trajectòria", path: "/trajectoria" },
    { name: "Equip impulsor", path: "/equip" },
    { name: "Entitats col·laboradores", path: "/entitats" },
    { name: "Contacte", path: "/contacte" },
  ];
  return (
    <header
      ref={headerRef}
      className={`header${scrolled ? " header-scrolled" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false);
        }
      }}
    >
      <div className="header-wrapper">
        {/* LOGO */}
        <Link
          className="header-section-wrapper"
          key="home"
          to="/"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="Principia Logo" className="header-image" />

          <div className="header-text-title">Principia</div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="header-section-wrapper-menu" aria-label="Navegació principal">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="header-section-wrapper-menu-item"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="header-actions">
          <Link to="/errorpage" className="header-action-login">Inicia sessió</Link>
          <Link to="/errorpage" className="header-button-register">Registra't</Link>
          <Link to="/errorpage" className="header-button-language">CAT</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          ref={menuToggleRef}
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Tancar menú" : "Obrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-label="Navegació mòbil"
        aria-hidden={!menuOpen}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="mobile-menu-item"
            tabIndex={menuOpen ? undefined : -1}
            onClick={closeMobileMenu}
          >
            {item.name}
          </Link>
        ))}

        <div className="mobile-menu-divider"></div>

        <div className="mobile-menu-actions">
          <Link
            to="/errorpage"
            className="mobile-menu-item"
            tabIndex={menuOpen ? undefined : -1}
            onClick={closeMobileMenu}
          >
            Inicia sessió
          </Link>
          <Link
            to="/errorpage"
            className="header-button-register"
            tabIndex={menuOpen ? undefined : -1}
            onClick={closeMobileMenu}
          >
            Registra't
          </Link>
          <Link
            to="/errorpage"
            className="header-button-language"
            tabIndex={menuOpen ? undefined : -1}
            onClick={closeMobileMenu}
          >
            CAT
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
