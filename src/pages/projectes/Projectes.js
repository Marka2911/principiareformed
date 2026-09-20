import MenuTitle from "../../components/MenuTitle";
import ProjectesTemplate from "../../components/ProjectesTemplate";
import demarquia from "../../assets/logo_demarquia.png";
import { FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

function Projectes() {
  return (
    <div className="projectes">
      <MenuTitle
        title="PROJECTES"
        subtitle="Les eines que construïm per obrir camí."
        description="Creem projectes amb una doble finalitat: en primera instància, per pressionar el sector públic perquè actuï d'acord amb els valors i necessitats que defensem; i en segona instància, per fomentar nosaltres mateixos allò que el sector públic no arriba a cobrir."
        subdescription="És per aquest motiu que hem creat el nostre primer projecte, Demarquia, i actualment estem elaborant un segon, Curia Qualitas."
        backgroundColor="var(--background-color)"
      />
      <ProjectesTemplate
        backgroundColor="var(--surface-color)"
        title="actuals"
        subtitle="Visió general dels projectes en execució."
        boxLogo={demarquia}
        boxTitle="Demarquia"
        boxSubtitle="Disponible desde octubre 2026"
        boxDescription={
          "Demarquia és una plataforma digital per impulsar iniciatives ciutadanes. Permet que qualsevol persona proposi i desenvolupi projectes col·lectius, facilita votacions no vinculants perquè la ciutadania expressi preferències i orienti les decisions públiques, i ajuda a democratitzar les institucions fent-les més obertes, participatives i connectades amb la intel·ligència col·lectiva."
        }
        boxWhatToDoFirst={
          "Iniciatives Ciutadanes — Escriu la teva idea, recull les firmes i càmbia el món que t'envolta"
        }
        boxWhatToDoSecond={
          "Enquestes i preguntes — Un munt de tipus d’enquestes i debats, mira què opina la gent de les teves idees o recull informació per estudis propis."
        }
        boxWhatToDoThird={
          "Democratitza la teva institució — Diferents tipus de votacions internes per saber què opinen els teus treballadors, estudiants…"
        }
        boxButtonIcon={FiDownload}
        boxButtonTitle="Instal·la't la app"
        boxButtonDescription={"Comença ara a utilitzar Demarquia"}
        boxOtherButtonIcon={MdArrowOutward}
        boxOtherButtonTitle={"Obrir Online"}
        boxOtherButtonDescription={"Comença ara a utilitzar Demarquia"}
      />
    </div>
  );
}

export default Projectes;
