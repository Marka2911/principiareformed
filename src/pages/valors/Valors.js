import MenuTitle from "../../components/MenuTitle";
import "./Valors.css";
import ButtonLightBlue from "../../components/ButtonTemplate.js";
import ValorsTemplate from "../../components/ValorsTemplate.js";
import { MdFamilyRestroom } from "react-icons/md";

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
          <div className="valors-info-button">
            <ButtonLightBlue text={"Escriu un suggeriment"} />
          </div>
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
        <ValorsTemplate valorsLogo={<MdFamilyRestroom/>} valorsTitle={"Educació"} valorsDescription={"Traslladem les normes del pati a la societat: compartir, respectar i ajudar qui ha caigut. Creiem en l'empatia i la justícia que aprenem de petits per resoldre conflictes parlant. L’escola ens ensenya que tothom mereix dignitat i que ningú ha de ser exclòs. Aquests valors educatius són els pilars del nostre compromís social futur. Volem que la cooperació i la solidaritat de l'aula siguin el motor d'un món millor."}/>
      </div>
    </div>
  );
}

export default Valors;
