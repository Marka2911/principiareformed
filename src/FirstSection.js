import "./FirstSection.css";
import ButtonTemplate from "./components/ButtonTemplate.js";
import logo from "./assets/logo_principia.png";
import { Link } from "react-router-dom";
function FirstSections() {
  return (
    <div className="first-section">
      <div className="first-section-wrapper">
        <div className="first-section-text-wrapper">
          <div className="first-section-text-title">PRINCIPIA</div>
          <div className="first-section-text-subtitle">
            Donant veu a allò que tothom sent.
          </div>
          <div className="first-section-text-description">
            Aspirem a ser un grup d’interès que dona veu a la ciutadania, un
            projecte col·laboratiu que recull veus i experiències del territori,
            combinant recerca i participació per impulsar l’emancipació social.
          </div>
          <div className="first-section-text-buttons-wrapper">
            <Link key="qui-som" to="/qui-som">
              <ButtonTemplate text="Descobreix Principia" />
            </Link>

            <button className="projectes-button">
              <Link key="projectes" to="/projectes">
                Veure Projectes →
              </Link>
            </button>
          </div>
        </div>
        <div className="first-section-image-wrapper">
          <img
            src={logo}
            alt="Principia Logo"
            className="first-section-image"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSections;
