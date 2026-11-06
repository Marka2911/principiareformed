import { useState } from "react";
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
    url: "https://instagram.com/cooprincipia",
    description: "cooprincipia",
  },
  {
    logo: logo3,
    title: "TIKTOK",
    url: "https://www.tiktok.com/@cooprincipia?is_from_webapp=1&sender_device=pc",
    description: "cooprincipia",
  },
  {
    logo: logo4,
    title: "X",
    url: "https://x.com/cooprincipia?s=11&t=T4y1diKz2Vfgad3nJRHv5g",
    description: "cooprincipia",
  },
  {
    logo: logo5,
    title: "YOUTUBE",
    url: "https://www.youtube.com/@cooprincipia",
    description: "cooprincipia",
  },
];

function EightSection() {
  const [copyMessage, setCopyMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(valors[0].description);
      setCopyMessage("Adreça de correu copiada!");
    } catch {
      setCopyMessage("No s'ha pogut copiar el correu. Torna-ho a provar.");
    }
  }

  return (
    <div className="eighth-section">
      <div className="eighth-section-wrapper">
        <div className="eighth-section-text-wrapper" data-reveal>
          <div className="eighth-section-text-title">CONTACTE</div>
          <div className="eighth-section-text-subtitle">
            Vols col·laborar o saber-ne més?
          </div>
          <div className="eighth-section-text-description">
            Si vols col·laborar, participar en projectes o consultar l'arxiu,
            contacta'ns via correu electrònic o a les nostres xarxes socials.
          </div>
        </div>
        <div className="eighth-section-contact-wrapper" data-reveal="fade" data-reveal-delay="70">
          {valors.map((valor, index) => {
            const Contact = valor.url ? "a" : "button";
            return (
            <Contact
              key={index}
              className="eighth-section-contact-item"
              {...(valor.url
                ? { href: valor.url, target: "_blank", rel: "noopener noreferrer" }
                : { type: "button", onClick: copyEmail, "aria-label": "Copia l'adreça de correu" })}
            >
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
            </Contact>
            );
          })}
          <div role="status" aria-live="polite">{copyMessage}</div>
        </div>
      </div>
    </div>
  );
}

export default EightSection;
