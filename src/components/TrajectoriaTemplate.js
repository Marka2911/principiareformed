import ProjectesButton from "./ProjectesButton";
import "./TrajectoriaTemplate.css"

const TrajectoriaTemplate = ({title, description, img}) => {
    return ( <div className="trajectoria-template">
        <div className="trajectoria-template-wrapper">
            <div className="trajectoria-template-info">
                <div className="trajectoria-template-title">
                    {title}
                </div>
                <div className="trajectoria-template-description">
                    {description}
                </div>
                <ProjectesButton text={"Llegir més"} firstBg="var(--primarydark-color)" secondText={"Descarrega PDF"} secondBg={"transparent"} border={"1px solid var(--primary-color)"} secondTextColor={"var(--primary-color)"}/>
             </div>
            <div className="trajectoria-template-img">
                <img src={img}/>
            </div>
        </div>
    </div> );
}
 
export default TrajectoriaTemplate;