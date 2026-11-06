import "./FifthSection.css";
import Pau from "./assets/imatge_pau.png";
import Marc from "./assets/imatge_marc.png";
import Laia from "./assets/imatge_laia.png";
import { Link } from "react-router-dom";
const teamMembers = [
  {
    image: Pau,
    name: "Pau Cereijo Darnaculleta",
    position: "President · Politòleg",
    description:
      "Plataforma de participació ciutadana per a una gestió pública més participativa, justa i eficient. El nostre primer projecte operatiu.",
  },
  {
    image: Marc,
    name: "Marc Mas Palomares",
    position: "Secretari · Informàtic",
    description:
      "Posa la tecnologia al servei de la transformació social i la democràcia accessible.",
  },
  {
    image: Laia,
    name: "Laia Navarro",
    position: "Dissenyadora",
    description:
      "Dissenya metodologies participatives i facilita dinàmiques de grup.",
  },
];
function FifthSection() {
  return (
    <div className="fifth-section">
      <div className="fifth-section-wrapper">
        <div className="fifth-section-text-wrapper" data-reveal>
          <div className="fifth-section-text-title">EQUIP IMPULSOR</div>
          <div className="fifth-section-text-subtitle">
            Les persones que impulsen el canvi.
          </div>
          <div className="fifth-section-text-description">
            Un grup de joves que combinen coneixement jurídic, tecnològic,
            organitzatiu i social per construir eines que democratitzen el poder
            i amplien la capacitat ciutadana.
          </div>
        </div>
        <div className="fifth-section-projects-wrapper">
          {teamMembers.map((member, index) => (
            <div className="fifth-section-demarquia-wrapper" key={member.name} data-reveal data-reveal-delay={index * 70}>
              <div className="third-section-demarquia-first-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="fifth-section-demarquia-image"
                />
              </div>

              <div className="third-section-demarquia-second-wrapper">
                <div className="third-section-demarquia-second-wrapper-text">
                  {member.name}
                </div>

                <div className="third-section-demarquia-second-wrapper-description">
                  {member.position}
                </div>

                <div>{member.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="third-section-footer">
          <Link key={"equip"} to="/equip" className="motion-link">Coneix l'equip complet →</Link>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
