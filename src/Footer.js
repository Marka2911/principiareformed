import { useEffect, useRef, useState } from "react";
import logo_principia from "./assets/logo_principia_white.png";
import { FiHeart } from "react-icons/fi";
import ButtonTemplate from "./components/ButtonTemplate.js";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const tooltipTimeout = useRef(null);

  useEffect(() => () => clearTimeout(tooltipTimeout.current), []);

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-information">
          <div className="footer-logo-section">
            <Link key="home" to="/" className="footer-logo-section-title">
              <div className="footer-logo-section-title-logo">
                <img src={logo_principia} alt="Principia Logo" />
              </div>
              <div className="footer-logo-section-title-text">Principia</div>
            </Link>
            <div className="footer-logo-section-description">
              Donant veu a allò que tothom sent.
            </div>
            <div className="footer-logo-section-button">
              <ButtonTemplate text="Fes una donació" icon={FiHeart} />
            </div>
          </div>
          <div className="footer-info-section">
            <div className="footer-section-title">ENLLAÇOS</div>
            <div className="footer-links-section-links">
              <Link className="footer-section-text" key="qui-som" to="/qui-som">
                Qui som?
              </Link>
              <Link
                className="footer-section-text"
                key="projectes"
                to="/projectes"
              >
                Projectes
              </Link>
              <Link className="footer-section-text" key="valors" to="/valors">
                Els nostres valors
              </Link>
              <Link
                className="footer-section-text"
                key="trajectoria"
                to="/trajectoria"
              >
                Trajectòria
              </Link>
              <Link className="footer-section-text" key="equip" to="/equip">
                Equip impulsor
              </Link>
              <Link
                className="footer-section-text"
                key="entitats"
                to="/entitats"
              >
                Entitats col·laboradores
              </Link>
              <Link
                className="footer-section-text"
                key="contacte"
                to="contacte"
              >
                Contacte
              </Link>
            </div>
          </div>
          <div
            className="footer-info-section footer-contact-section"
            role="button"
            tabIndex={0}
            aria-label="Copia el correu electrònic principia.coop@gmail.com"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.currentTarget.click();
              }
            }}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText("principia.coop@gmail.com");
                setEmailCopied(true);
                clearTimeout(tooltipTimeout.current);
                tooltipTimeout.current = setTimeout(() => setEmailCopied(false), 2000);
              } catch (error) {
                console.error("Failed to copy email to clipboard", error);
              }
            }}
          >
            <div className="footer-section-title">CONTACTE</div>
            <div className="footer-section-text">principia.coop@gmail.com</div>
            {emailCopied && (
              <span className="footer-copy-tooltip" role="status">
                Email copiat!
              </span>
            )}
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-section-text">
            ©2026 Principia - Tots el drets reservats
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
