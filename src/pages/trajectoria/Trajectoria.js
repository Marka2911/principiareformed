import MenuTitle from "../../components/MenuTitle";    
import ProjectesButton from "../../components/ProjectesButton";
function Trajectoria() {
    return ( <div className="trajectoria">
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
    </div> );
}

export default Trajectoria;