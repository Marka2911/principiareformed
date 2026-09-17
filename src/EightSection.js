import "./EightSection.css";
import logo1 from "./assets/mail.png";
import logo2 from "./assets/insta.png";
import logo3 from "./assets/tiktok.png";
import logo4 from "./assets/x.png";
import logo5 from "./assets/youtube.png";
const valors = [
  {
    logo: logo1,
    title: "EMAIL",
    description: "principia.coop@gmail.com",
  },
  {
    logo: logo2,
    title: "INSTAGRAM",
    description: "cooprincipia",
  },
  {
    logo: logo3,
    title: "TIKTOK",
    description: "cooprincipia",
  },
  {
    logo: logo4,
    title: "X",
    description: "cooprincipia",
  },
  {
    logo: logo5,
    title: "YOUTUBE",
    description: "cooprincipia",
  },
];

function EightSection() {
  return (
    <div className="eighth-section">
      <div className="eighth-section-wrapper">
        <div className="eighth-section-text-wrapper">
          <div className="eighth-section-text-title">CONTACTE</div>
          <div className="eighth-section-text-subtitle">
            Vols col·laborar o saber-ne més?
          </div>
          <div className="eighth-section-text-description">
            Si vols col·laborar, participar en projectes o consultar l'arxiu,
            contacta'ns via correu electrònic o a les nostres xarxes socials.
          </div>
        </div>
        <div className="eighth-section-contact-wrapper">
          {valors.map((valor, index) => (
            <div key={index} className="eighth-section-contact-item">
              <div className="eighth-section-contact-logo-wrapper">
                <img src={valor.logo} alt={valor.title} />
              </div>
              <div className="eighth-section-contact-text-wrapper">
                <div className="eighth-section-contact-title">
                  {valor.title}
                </div>
                <div className="eighth-section-contact-description">
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

export default EightSection;
