import { Link } from "react-router-dom";
import "./SeventhSection.css";
import valor1 from "./assets/valor_1.png";
import valor2 from "./assets/valor_2.png";
import valor3 from "./assets/valor_3.png";
import valor4 from "./assets/valor_4.png";
import valor5 from "./assets/valor_5.png";
import valor6 from "./assets/valor_6.png";
import valor7 from "./assets/valor_7.png";

const valors = [
  {
    image: valor1,
    title: "Escola i ètica",
    description: "Els valors de l’escola, com a base educativa i ètica.",
  },
  {
    image: valor2,
    title: "Economia Social i Solidària",
    description:
      "Model de producció i relació econòmica que guia l’organització.",
  },
  {
    image: valor3,
    title: "Ideologia cooperativa",
    description:
      "Integra conceptes essencials no recollits pels altres principis.",
  },
  {
    image: valor4,
    title: "Lògica cooperativista",
    description:
      "Estructura organitzativa i cultural que guia totes les nostres accions.",
  },
];
const valors2 = [
  {
    image: valor5,
    title: "ODS i Drets Humans",
    description:
      "Marc universal de justícia i equitat per a les nostres accions.",
  },
  {
    image: valor6,
    title: "Municipalisme",
    description: "Expressió de sobirania local i democràcia de proximitat",
  },
  {
    image: valor7,
    title: "Agricultura i sector primari",
    description: "Pilar de sostenibilitat i arrelament territorial.",
  },
];

function SeventhSection() {
  return (
    <div className="seventh-section">
      <div className="seventh-section-wrapper">
        <div className="seventh-section-text-wrapper" data-reveal>
          <div className="seventh-section-text-title">ELS NOSTRES VALORS</div>
          <div className="seventh-section-text-subtitle">
            Allò en què creiem guia allò que construïm.{" "}
          </div>
          <div className="seventh-section-text-description">
            Ens definim a partir de set grans conceptes que interpretem com els
            fonaments dels nostres valors:
          </div>
          <Link key="valors" to="/valors" className="seventh-section-text-title motion-link">
            Aprofundeix en els nostres valors →
          </Link>
        </div>
        <div className="seventh-section-valors-wrapper" data-reveal>
          {valors.map((valor) => (
            <div className="seventh-section-valors" key={valor.title}>
              <div className="seventh-section-left">
                <img src={valor.image} alt={valor.title} />
              </div>

              <div className="seventh-section-right">
                <div className="seventh-section-right-text-title">
                  {valor.title}
                </div>

                <div className="seventh-section-right-text-description">
                  {valor.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="seventh-section-valors-wrapper" data-reveal data-reveal-delay="70">
          {valors2.map((valor) => (
            <div className="seventh-section-valors" key={valor.title}>
              <div className="seventh-section-left">
                <img src={valor.image} alt={valor.title} />
              </div>

              <div className="seventh-section-right">
                <div className="seventh-section-right-text-title">
                  {valor.title}
                </div>

                <div className="seventh-section-right-text-description">
                  {valor.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
