import logo_principia from "./assets/logo_principia_white.png";
import { FiHeart } from "react-icons/fi";
import ButtonTemplate from "./components/ButtonTemplate.js";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-information">
          <div className="footer-logo-section">
            <div className="footer-logo-section-title">
              <div className="footer-logo-section-title-logo">
                <img src={logo_principia} alt="Principia Logo" />
              </div>
              <div className="footer-logo-section-title-text">Principia</div>
            </div>
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
              <div className="footer-section-text">Qui som?</div>
              <div className="footer-section-text">Projectes</div>
              <div className="footer-section-text">Els nostres valors</div>
              <div className="footer-section-text">Trajectòria</div>
              <div className="footer-section-text">Equip impulsor</div>
              <div className="footer-section-text">
                Entitats col·laboradores
              </div>
              <div className="footer-section-text">Contacte</div>
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
