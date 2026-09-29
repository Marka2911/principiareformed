import { Link } from "react-router-dom";
import "./SixthSection.css";
import logo_35 from "./assets/logo_35.png";
import logo_36 from "./assets/logo_36.png";
import logo_37 from "./assets/logo_37.png";
import logo_38 from "./assets/logo_38.png";
import logo_39 from "./assets/logo_39.png";
import logo_40 from "./assets/logo_40.png";
function SixthSection() {
  return (
    <div className="sixth-section">
      <div className="sixth-section-wrapper">
        <div className="second-section-text-wrapper">
          <div className="second-section-text-title">
            ENTITATS COL·LABORADORES
          </div>
          <div className="second-section-text-subtitle">
            Construïm amb qui comparteix la visió.{" "}
          </div>
          <div className="second-section-text-description">
            Al llarg del nostre creixement, una pluralitat d'entitats ha decidit
            donar-nos suport de manera continuada. Sense elles, el pas d'una
            idea inicial a un projecte real i operatiu no hauria estat possible.
          </div>
          <div className="sixth-section-colabs-img">
            <img src={logo_35} alt=""/>
            <img src={logo_36} alt=""/>
            <img src={logo_37} alt=""/>
            <img src={logo_38} alt=""/>
            <img src={logo_39} alt=""/>
            <img src={logo_40} alt=""/>
          </div>
          <Link key="entitats" to="/entitats" className="second-section-text-title">
            Veure totes les entitats →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
