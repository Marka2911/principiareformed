import MenuTitle from "../../components/MenuTitle";
import "./QuiSom.css";
function QuiSom() {
  return (
    <div className="qui-som">
      <MenuTitle
        title="QUI SOM?"
        subtitle="Una cooperativa que no vol ser proveïdora. Vol ser agent."
        description="A Principia som una cooperativa de base transformadora que treballa per democratitzar les institucions públiques i fer-les més responsables, accessibles i coherents amb els valors que haurien de defensar: justícia social, transparència, inclusió, sostenibilitat, compromís comunitari."
        backgroundColor="var(--surface-color)"
      />
      <div className="qui-som-content">
        <div className="qui-som-content-title">
          No denunciem mancances: oferim solucions.
        </div>
        <div className="qui-som-content-description">
          <p>
            Creiem que el sector públic ha de ser el garant d'aquests valors,
            però sabem que sovint no ho és. Per això, des de la nostra
            cooperativa, pressionem perquè les administracions assumeixin la
            seva responsabilitat, i ho fem des de la pràctica: desenvolupant
            eines digitals que poden facilitar aquesta transformació. No ens
            limitem a denunciar les mancances; oferim solucions concretes,
            viables i adaptades al context institucional.
          </p>
          <p>
            Les eines que creem —com Demarquia— són instruments per fer possible
            una gestió pública més participativa, més justa i més eficient. Però
            no són el nostre fi: són el mitjà per obrir camí cap a una
            institucionalitat més democràtica. Amb aquestes eines, volem
            demostrar que és possible fer les coses millor, i que si el sector
            públic no ho fa, nosaltres estem disposats a fer-ho.
          </p>
          <p>
            Apostem per una cooperativa que no només acompanya processos, sinó
            que aspira a materialitzar projectes públics des de l'economia
            social i solidària. Si les administracions no assumeixen els
            resultats que proposem, volem tenir la capacitat —i el
            reconeixement— per assumir-los nosaltres. Per això construïm
            Principia com una estructura sòlida, transparent i compromesa, capaç
            de generar impacte real i de fer-se càrrec de tasques que avui estan
            desateses.
          </p>
          <p>
            Som una cooperativa jove, però amb una visió clara: no volem ser
            proveïdors, volem ser agents polítics. Agents que proposen, que
            construeixen, que pressionen i que assumeixen. Agents que treballen
            des de la responsabilitat, la cooperació i la convicció que un altre
            sector públic és possible —i que pot començar des d'aquí.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuiSom;
