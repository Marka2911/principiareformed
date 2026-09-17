import "./SecondSection.css";
import logo from "./assets/frame_22.png";
function SecondSection() {
  return (
    <div className="second-section">
      <div className="second-section-wrapper">
        <div className="second-section-text-wrapper">
          <div className="second-section-text-title">QUI SOM?</div>
          <div className="second-section-text-subtitle">
            Una cooperativa que no vol ser proveïdora. Vol ser agent.
          </div>
          <div className="second-section-text-description">
            A Principia som una cooperativa de base transformadora que treballa
            per democratitzar les institucions públiques i fer-les més
            responsables, accessibles i coherents amb els valors que haurien de
            defensar: justícia social, transparència, inclusió, sostenibilitat,
            compromís comunitari…
          </div>
          <div className="second-section-text-title">Coneix-nos a fons → </div>
        </div>
        <div className="second-section-image-wrapper">
          <img
            src={logo}
            alt="Principia Logo"
            className="second-section-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
