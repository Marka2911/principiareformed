import { useState } from "react";
import "./Header.css";
import logo from "./assets/logo_principia.png";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="header">
      <div className="header-wrapper">
        {/* LOGO */}
        <Link className="header-section-wrapper" key="home" to="/">
          <img src={logo} alt="Principia Logo" className="header-image" />

          <div className="header-text-title">Principia</div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="header-section-wrapper-menu">
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
        <Link key="errorpage" to="/errorpage" className="header-actions" >
          <div>Inicia sessió</div>

          <button className="header-button-register">Registra't</button>

          <button className="header-button-language">CAT</button>
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Obrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="mobile-menu-item"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <div className="mobile-menu-divider"></div>

        <Link key="errorpage" to="/errorpage"> 
          {" "}
          <div className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
            Inicia sessió
          </div>
          <button className="header-button-register">Registra't</button>
          <button className="header-button-language">CAT</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
