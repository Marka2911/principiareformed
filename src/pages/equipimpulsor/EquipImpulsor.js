import MenuTitle from "../../components/MenuTitle";

import CvTemplate from "../../components/cvTemplate.js";
import teamMembers from "./teamMembers";

function EquipImpulsor() {
  return (
    <div className="equip-impulsor">
      <MenuTitle
        title="EQUIP IMPULSOR"
        subtitle="Les persones que impulsen el canvi."
        description="L'equip impulsor de Principia coordina la transformació cap a una democràcia participativa digital. Està format per persones amb experiència en governança pública, desenvolupament de tecnologies civics i activisme comunitari. La seva missió és dissenyar i implementar eines com Demarquia per fomentar la transparència, la participació ciutadana i la col·laboració entre administracions i moviments socials."
        subdescription="Treballen per construir processos participatius, assessorant ajuntaments, cooperatives i organitzacions socials. L'equip combina metodologies de disseny col·laboratiu, estratègies tècniques i una orientació pedagògica per acompanyar canvis institucionals."
      />
      <CvTemplate members={teamMembers} />

    </div>
  );
}

export default EquipImpulsor;
