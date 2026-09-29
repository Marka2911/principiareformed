import logo_principia from "./assets/logo_principia_white.png";
import { FiHeart } from "react-icons/fi";
import ButtonTemplate from "./components/ButtonTemplate.js";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
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
          <div className="footer-info-section">
            <div className="footer-section-title">CONTACTE</div>
            <div className="footer-section-text">principia.coop@gmail.com</div>
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
