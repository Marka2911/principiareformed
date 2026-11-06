import "./LlibreComponent.css";
import ProjectesButton from "./ProjectesButton";
const LlibreComponent = ({ title, subtitle, description }) => {
  return (
    <div className="llibre-component-wrapper" data-reveal>
      <div className="llibre-title">{title}</div>
      <div className="llibre-info">{subtitle}</div>
      <div className="llibre-info">{description}</div>
      <ProjectesButton
        text={"Llegir publicació"}
        firstBg={"var(--primarydark-color)"}
        secondBg={"transparent"}
        secondText={"Compartir"}
        border={"1px solid var(--primary-color)"}
        secondTextColor={"var(--primary-color)"}
      />
    </div>
  );
};

export default LlibreComponent;
