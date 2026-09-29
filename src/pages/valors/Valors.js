import MenuTitle from "../../components/MenuTitle";
import "./Valors.css";
import ButtonLightBlue from "../../components/ButtonTemplate.js";
import ValorsTemplate from "../../components/ValorsTemplate.js";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHammer } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaTractor } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Valors() {
  return (
    <div className="valors">
      <MenuTitle
        title="ELS NOSTRES VALORS"
        subtitle="Allò en què creiem guia allò que construïm."
        description="A Principia justifiquem totes les nostres accions i avancem justificant-ho sempre amb els valors internals que ens mouen. A continuació trobaràs un resum dels nostres valors i la possibilitat de llegir-ne una explicació completa."
        backgroundColor="var(--surface-color)"
      />
      <div className="valors-section-2">
        <div className="valors-section-2-info">
          <div className="valors-info-title">Democràcia Participativa</div>
          <div className="valors-info-subtitle">
            {" "}
            A Principia considerem que el coneixement col·lectiu és una de les
            eines més potents i més desaprofitades. Si consideres que hauríem
            d'incorporar altres valors, o si algun està mal formulat, estarem
            encantats d'escoltar i integrar la teva opinió.
          </div>
          <Link key={"contacte"} to="/contacte" className="valors-info-button">
            <ButtonLightBlue text={"Escriu un suggeriment"} />
          </Link>
        </div>
        <div className="valors-section-2-button">
          <ButtonLightBlue
            text={"Descarrega PDF"}
            background={"var(--primarydark-color)"}
            border={"1px solid var(--background-color)"}
          />
        </div>
      </div>
      <div className="valors-section-3">
        <ValorsTemplate
          valorsLogo={<MdFamilyRestroom />}
          valorsTitle={"Educació"}
          valorsDescription={
            "Traslladem les normes del pati a la societat: compartir, respectar i ajudar qui ha caigut. Creiem en l'empatia i la justícia que aprenem de petits per resoldre conflictes parlant. L’escola ens ensenya que tothom mereix dignitat i que ningú ha de ser exclòs. Aquests valors educatius són els pilars del nostre compromís social futur. Volem que la cooperació i la solidaritat de l'aula siguin el motor d'un món millor."
          }
          background={"var(--background-color)"}
        />
        <ValorsTemplate
          valorsLogo={<FaHammer />}
          valorsTitle={"ODS"}
          valorsDescription={
            "Els ODS són un marc global impulsat per les Nacions Unides que defineix 17 objectius per garantir un futur sostenible, just i equitatiu. Ens proporcionen una guia concreta per abordar reptes com la pobresa, la desigualtat, el canvi climàtic, l’educació de qualitat, la igualtat de gènere o la sostenibilitat ambiental. A Principia els interpretem com un compromís pràctic: una manera d’assegurar que els nostres projectes contribueixen a transformar estructures i millorar la vida de les persones."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<FaBalanceScale />}
          valorsTitle={"Drets Humans"}
          valorsDescription={
            "Els Drets Humans constitueixen el marc universal que garanteix la dignitat, la llibertat i la igualtat de totes les persones. Inclouen drets civils, polítics, socials, econòmics i culturals que han de ser protegits per qualsevol institució democràtica. Per a Principia, els Drets Humans no són només un referent normatiu, sinó una obligació moral: tota proposta, model o projecte ha de reforçar-los, ampliar-los i garantir que ningú en quedi exclòs."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<FaLeaf />}
          valorsTitle={"Economía Social i Solidària"}
          valorsDescription={
            "Prioritzem el bé comú per sobre del benefici individual mitjançant la solidaritat i el suport mutu. Apostem per una sostenibilitat integral que respecti els límits ecològics del planeta. Creiem en la presa de decisions horitzontal, la transparència i la rotació de càrrecs. Posem la vida al centre de l’activitat econòmica, integrant la perspectiva feminista i les cures. Volem transformar l’economia actual construint mercats socials que combatin les desigualtats."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<BsFillBuildingsFill />}
          valorsTitle={"Municipalisme"}
          valorsDescription={
            "Creiem que les grans transformacions socials neixen de la vida quotidiana i l’organització comunitària. El municipi és l’espai on es detecten les necessitats reals i es construeix confiança. Defensem la sobirania local: el dret dels pobles a decidir sobre els seus recursos i serveis. Apostem per construir des de baix una nova manera de fer política arrelada en la proximitat. El municipalisme és la nostra eina per democratitzar les decisions ciutadanes."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<FaHeadSideVirus />}
          valorsTitle={"Marc de Pensament i Acció"}
          valorsDescription={
            "Creiem que les grans transformacions socials neixen de la vida quotidiana i l’organització comunitària. El municipi és l’espai on es detecten les necessitats reals i es construeix confiança. Defensem la sobirania local: el dret dels pobles a decidir sobre els seus recursos i serveis. Apostem per construir des de baix una nova manera de fer política arrelada en la proximitat. El municipalisme és la nostra eina per democratitzar les decisions ciutadanes."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<FaTractor />}
          valorsTitle={"Producció i Consum Responsable"}
          valorsDescription={
            "Creiem que les grans transformacions socials neixen de la vida quotidiana i l’organització comunitària. El municipi és l’espai on es detecten les necessitats reals i es construeix confiança. Defensem la sobirania local: el dret dels pobles a decidir sobre els seus recursos i serveis. Apostem per construir des de baix una nova manera de fer política arrelada en la proximitat. El municipalisme és la nostra eina per democratitzar les decisions ciutadanes."
          }
          background={"var(--surface-color)"}
        />
                <ValorsTemplate
          valorsLogo={<FaPeopleRoof />}
          valorsTitle={"Cooperativisme"}
          valorsDescription={
            "Els ODS són un marc global impulsat per les Nacions Unides que defineix 17 objectius per garantir un futur sostenible, just i equitatiu. Ens proporcionen una guia concreta per abordar reptes com la pobresa, la desigualtat, el canvi climàtic, l’educació de qualitat, la igualtat de gènere o la sostenibilitat ambiental. A Principia els interpretem com un compromís pràctic: una manera d’assegurar que els nostres projectes contribueixen a transformar estructures i millorar la vida de les persones."
          }
          background={"var(--surface-color)"}
        />
      </div>
    </div>
  );
}

export default Valors;
