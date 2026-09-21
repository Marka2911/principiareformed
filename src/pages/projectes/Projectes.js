import MenuTitle from "../../components/MenuTitle";
import ProjectesTemplate from "../../components/ProjectesTemplate";
import demarquia from "../../assets/logo_demarquia.png";
import curiaqualitas from "../../assets/logo_curia.png";
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
        boxSubtitleActive="var(--primary-color)"
        boxDescription={
          "Demarquia és una plataforma digital per impulsar iniciatives ciutadanes. Permet que qualsevol persona proposi i desenvolupi projectes col·lectius, facilita votacions no vinculants perquè la ciutadania expressi preferències i orienti les decisions públiques, i ajuda a democratitzar les institucions fent-les més obertes, participatives i connectades amb la intel·ligència col·lectiva."
        }
        boxItemTitle={"Iniciatives Ciutadanes"}
        boxWhatToDoFirst={
          "— Escriu la teva idea, recull les firmes i càmbia el món que t'envolta"
        }
        boxItemTitleSecond={"Enquestes i preguntes"}
        boxWhatToDoSecond={
          "— Un munt de tipus d’enquestes i debats, mira què opina la gent de les teves idees o recull informació per estudis propis."
        }
        boxItemTitleThird={"Democratitza la teva institució"}
        boxWhatToDoThird={
          "— Diferents tipus de votacions internes per saber què opinen els teus treballadors, estudiants…"
        }
        boxButtonIcon={<FiDownload/>}
        boxButtonTitle="Instal·la't la app"
        boxButtonDescription={"Comença ara a utilitzar Demarquia"}
        boxOtherButtonIcon={<MdArrowOutward/>}
        boxOtherButtonTitle={"Obrir Online"}
        boxOtherButtonDescription={"Comença ara a utilitzar Demarquia"}
      />
      <ProjectesTemplate
        backgroundColor="var(--background-color)"
        title="futurs"
        subtitle="Propostes i iniciatives planificades."
        boxLogo={curiaqualitas}
        boxTitle="Curia Qualitas"
        boxSubtitle="No disponible"
        boxSubtitleActive="grey"
        boxDescription={
          "Curia Qualitas és una eina que t'ajuda a fer tràmits amb l'administració de manera més fàcil, guiada i comprensible. Analitza si les institucions que t'envolten compleixen els valors democràtics, socials i comunitaris que defensa Principia. També identifica quines empreses i projectes del teu entorn estan realment compromesos amb el canvi social i el bé comú."
        }
        boxItemTitle={"Tràmits amb l’administració  "}
        boxWhatToDoFirst={
          "— Realitza gestions administratives de manera guiada i comprensible."
        }
        boxItemTitleSecond={"Estudiar el compliment de valors"}
        boxWhatToDoSecond={
          "—  Analitza si les institucions que t’envolten compleixen els valors democràtics que defensem."
        }
        boxItemTitleThird={"Estudiar on tens empreses compromeses"}
        boxWhatToDoThird={
          "— Descobreix quines empreses del teu entorn treballen pel canvi social."
        }
        boxNotFunciontingButtonText={"Vull ser notificat quan estigui disponible"}
        boxNotFunciontingButtonBackground={"--var(background-color)"}
      />
    </div>
  );
}

export default Projectes;
