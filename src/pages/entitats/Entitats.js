import MenuTitle from "../../components/MenuTitle";
import EntitatsTemplate from "../../components/EntitatsTemplate";
import imgJoves from "../../assets/joves.png";
import bloc4 from "../../assets/bloc4.png";
import upf from "../../assets/upfsolidaria.png";
import communia from "../../assets/communia.png";
import coopolis from "../../assets/coopolis.png";
import bcn from "../../assets/bcn.png";
import "./Entitats.css";

function Entitats() {
  return (
    <div className="entitats">
      <MenuTitle
        title="ENTITATS COL·LABORADORES"
        subtitle="Construïm amb qui comparteix la visió."
        description="Les entitats col·laboradores de Principia formen una xarxa plural i compromesa amb la innovació democràtica, la participació ciutadana i la construcció de models organitzatius més oberts, transparents i inclusius. Són organitzacions que aporten coneixement especialitzat, experiència pràctica i capacitat d'incidència, i que comparteixen la voluntat de transformar la relació entre ciutadania i institucions."
        subdescription="Aquestes entitats contribueixen a enriquir el projecte amb mirades diverses, suport tècnic, recerca aplicada i espais de prova que permeten validar noves eines i metodologies. La seva col·laboració garanteix que el desenvolupament de la plataforma i dels processos participatius mantingui un alt estàndard de qualitat, rigor i utilitat social."
        subestdescription="Treballar conjuntament amb elles ens permet connectar el món acadèmic, el teixit social i les administracions, generant un ecosistema que impulsa la participació real, la cultura democràtica i la innovació pública."
        backgroundColor="var(--background-color)"
      />
      <div className="entitats-wrapper">
        <EntitatsTemplate
          logo1={imgJoves}
          logo2={bloc4}
          title={"ESSprendre AccESS JovESS i Bloc4BCN"}
          subtitle={
            "Suport comunitari, coneixement pràctic i una mirada crítica sobre les necessitats reals dels barris"
          }
          description={
            "El servei ESSprendre i AccESS que forma part de l'espai JovESS del Bloc4BCN ens han acompanyat en el procés de definició cooperativa, aportant suport comunitari, coneixement pràctic i una mirada crítica..."
          }
        />
        <EntitatsTemplate
          logo1={upf}
          title={"UPF Solidària"}
          subtitle={"Prova pilot de Demarquia"}
          description={
            "UPF Solidària ha estat un espai clau per vincular el nostre treball amb l’àmbit universitari, facilitant el reconeixement institucional i obrint camins per a la transferència de coneixement entre l’acadèmia i la pràctica cooperativa..."
          }
        />
        <EntitatsTemplate
          logo1={communia}
          title={"Communia"}
          subtitle={"Suport tècnic i cooperatiu en àmbits informàtics"}
          description={
            "Communia ha estat un suport essencial per al nostre projecte, aportant coneixement tècnic i cooperatiu en aquells àmbits informàtics que superaven les nostres capacitats internes. La seva col·laboració ha ... "
          }
        />
        <EntitatsTemplate
          logo1={coopolis}
          title={"Coòpolis"}
          subtitle={"Formalització de Principia"}
          description={
            "Coòpolis ens ha orientat en la formalització cooperativa i en l’accés a recursos públics, oferint acompanyament en la presentació de projectes, la definició jurídica i la connexió amb altres iniciatives transformadores..."
          }
        />
        <EntitatsTemplate
          logo1={bcn}
          title={"Ajuntament de Barcelona"}
          subtitle={"Ajut ENFORTIM"}
          description={
            "El suport de l’Ajuntament de Barcelona a través de l’ENFORTIM ha estat un impuls decisiu per consolidar la nostra estructura cooperativa i avançar en el desenvolupament de les nostres eines digitals. Aquest ajut ens ha permès..."
          }
        />
      </div>
    </div>
  );
}

export default Entitats;
