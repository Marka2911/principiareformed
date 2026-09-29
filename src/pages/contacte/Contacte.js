import MenuTitle from "../../components/MenuTitle";
import ProjectesButton from "../../components/ProjectesButton";
import Line from "../../components/Line";
import ubi from "../../assets/ubicacionmaps.png";
import "./Contacte.css";
import SocialMediaTemplate from "../../components/SocialMediaTemplate";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsCopy } from "react-icons/bs";

function Contacte() {
  return (
    <div className="contacte">
      <MenuTitle
        title="CONTACTE"
        subtitle="Vols col·laborar o saber-ne més?"
        description="Si vols saber més sobre el projecte, col·laborar-hi o explorar possibles sinergies, estem a la teva disposició. L'equip respon de manera propera i àgil per facilitar qualsevol consulta, proposta o necessitat relacionada amb la plataforma i els seus processos. Escriu-nos i t'acompanyarem en allò que necessitis."
      />
      <div className="contacte-info-wrapper">
        <div className="contacte-info-email">
          <div className="contacte-email-title">Contacta amb Principia</div>
          <div className="llibre-info">
            Ens interessa escoltar iniciatives, col·laboracions i consultes
            tècniques. Omple el formulari i et respondrem.
          </div>
          <div className="contacte-email-formulari-wrapper">
            <div className="contacte-email-formulari">
              <div className="formulari-template">
                <div className="formulari-template-text">Nom complet</div>
                <input
                  className="forumlari-template-input"
                  placeholder="Anna Puig"
                ></input>
              </div>
              <div className="formulari-template">
                <div className="formulari-template-text">
                  Organització / Cooperativa (Opcional)
                </div>
                <input
                  className="forumlari-template-input"
                  placeholder="Cooperativa La Fàbrica"
                ></input>
              </div>
            </div>
            <div className="contacte-email-formulari">
              <div className="formulari-template">
                <div className="formulari-template-text">Correu electrònic</div>
                <input
                  className="forumlari-template-input"
                  placeholder="exemple@domini.cat"
                ></input>
              </div>
              <div className="formulari-template">
                <div className="formulari-template-text">Assumpte</div>
                <input
                  className="forumlari-template-input"
                  placeholder="Col·laboració amb Demarquia / Demanda tècnica"
                ></input>
              </div>
            </div>
            <div className="contacte-email-formulari">
              <div className="formulari-template">
                <div className="formulari-template-text">Missatge</div>
                <input
                  className="forumlari-template-input-message"
                  placeholder="Explica breument la teva proposta, necessitat o consulta..."
                ></input>
              </div>
            </div>
            <div className="contacte-formulari-checkbox">
              <input type="checkbox"></input>
              <div className="llibre-info">
                Vull rebre el butlletí i actualitzacions de projectes
              </div>
            </div>
            <ProjectesButton
              text={"Enviar missatge"}
              firstBg={"var(--primary-color"}
              secondBg={"transparent"}
              secondText={"Restablir"}
              secondTextColor={"var(--primarydark-color)"}
              border={"1px solid var(--primarydark-color"}
            />
            <Line></Line>
          </div>
          <div className="contacte-email-title-small">
            Altres formes de contacte
          </div>
          <div className="llibre-info">
            Correu electrònic principal: principia.coop@gmail.com
          </div>
        </div>
        <div className="contacte-info-other-info">
          <div className="other-info-wrapper">
            <div className="contacte-email-title-small">Ubicació</div>
            <div className="llibre-info">
              Adreça: Sant Adrìa Bosc 1, 08002, Barcelona
            </div>
            <div className="other-info-img">
              <img src={ubi} />
            </div>
          </div>
          <div className="other-info-wrapper">
            <div className="contacte-email-title-small">Adreça electrònica</div>
            <div className="llibre-info">principia.coop@gmail.com</div>
            <div className="other-info-img"></div>
          </div>
          <div className="other-info-wrapper">
            <div className="contacte-email-title-small">Segueix-nos</div>
            <div className="llibre-info">
              Troba'ns a totes les xarxes com cooprincipia
            </div>
            <div className="other-info-social-media">
              <SocialMediaTemplate title="INSTAGRAM" icon={<FaInstagram />} />
              <SocialMediaTemplate title="TIKTOK" icon={<FaTiktok />} />
              <SocialMediaTemplate title="X / TWITTER" icon={<FaXTwitter />} />
              <SocialMediaTemplate
                title="YOUTUBE"
                icon={<AiOutlineYoutube />}
              />
            </div>
          </div>
          <div className="other-info-wrapper">
            <button className="other-info-button-wrapper">
              <BsCopy className="a-big-icon"/>
              Copia @cooprincipia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacte;
