import MenuTitle from "../../components/MenuTitle";
import ProjectesButton from "../../components/ProjectesButton";
import TrajectoriaTemplate from "../../components/TrajectoriaTemplate";
import motivacio from "../../assets/motivacio.png";
import intro from "../../assets/intro.png";
import "./Trajectoria.css";

function Trajectoria() {
  return (
    <div className="trajectoria">
      <MenuTitle
        title="TRAJECTÒRIA"
        subtitle="Explora com construïm eines per a la democràcia participativa."
        description="Explora les publicacions públiques, adquireix el nostre llibre de referència i recorre la nostra trajectòria amb contingut multimèdia i resums per capítols. Aquí trobaràs el que necessites per comprendre com construïm eines digitals per a la democràcia participativa."
        backgroundColor="var(--background-color)"
        buttons
        text={"Veure publicacions"}
        firstBg="var(--primary-color)"
        secondText={"Més informació"}
        secondBg={"transparent"}
        border={"1px solid var(--titles-color)"}
        secondTextColor={"var(--titles-color)"}
      />

      <div className="trajectoria-wrapper">
        <div className="trajectoria-title">Trajectoria</div>

        <div className="trajectoria-line-wrapper">

          {/* VERTICAL LINE + FIRST DOT */}
          <div className="trajectoria-line">
            <div className="trajectoria-dot"></div>
          </div>

          <div className="trajectoria-info">

            {/* PRINCIPIA */}
            <div className="trajectoria-wrapper-title">
              <div className="trajectoria-title-style">Principia</div>
              <div className="trajectoria-see-more">Veure més...</div>
            </div>

            <div className="trajectoria-subtitle">
              Història i valors de la cooperativa
            </div>

            <TrajectoriaTemplate
              title="Motivació"
              description="La raó fonamental de Principia neix de la necessitat de democratitzar les eines digitals que governen la vida pública i facilitar eines que posin la ciutadania al centre."
              img={motivacio}
            />

            <TrajectoriaTemplate
              title="Introducció"
              description="Entén desde un inci com s’inicia un projecte com Principia, desde la base ideològica a la construcció d’un projecte viable."
              img={intro}
            />

            {/* DEMARQUIA + SECOND DOT */}
            <div className="trajectoria-wrapper-title trajectoria-section-dot">
              <div className="trajectoria-dot-secondary"></div>

              <div className="trajectoria-title-style">Demarquia</div>
              <div className="trajectoria-see-more">Veure més...</div>
            </div>

            <div className="trajectoria-subtitle">
              La plataforma que posa la ciutadania a governar processos
              col·lectius.
            </div>

            <TrajectoriaTemplate
              title="Motivació"
              description="La raó fonamental de Principia neix de la necessitat de democratitzar les eines digitals que governen la vida pública i facilitar eines que posin la ciutadania al centre."
              img={motivacio}
            />

            <TrajectoriaTemplate
              title="Introducció"
              description="Entén desde un inci com s’inicia un projecte com Principia, desde la base ideològica a la construcció d’un projecte viable."
              img={intro}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Trajectoria;