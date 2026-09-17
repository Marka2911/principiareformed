import "./ForthSection.css";
import Timeline from "./Timeline.js";
function ForthSection() {
  return (
    <div className="forth-section">
      <div className="forth-section-wrapper">
        <div className="forth-section-text-wrapper">
          <div className="forth-section-text-title">TRAJECTÒRIA</div>
          <div className="forth-section-text-subtitle">
            Des d'on venim i cap a on anem.
          </div>
          <div className="forth-section-text-description">
            El projecte va néixer a les aules de batxillerat, fruit d'un treball
            de recerca i del desig d'impacte real. El que va començar com una
            iniciativa individual s'ha convertit en un col·lectiu de joves
            compromesos amb la transformació social. Si el sector públic no
            actua, estem preparats per assumir nosaltres mateixos les tasques
            que calen per construir un model més just i participatiu.
          </div>
          <div className="forth-section-text-title">
            Veure la trajectòria completa →
          </div>
        </div>
        <div className="forth-section-timeline-wrapper">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default ForthSection;
