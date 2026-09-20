import { FaCheck } from "react-icons/fa";
import "./ProjectesTemplate.css";
import ProjectesButton from "./ProjectesButton.js"
const ProjectesTemplate = ({
  backgroundColor,
  title,
  subtitle,
  boxLogo,
  boxTitle,
  boxSubtitle,
  boxDescription,
  boxWhatToDoFirst,
  boxWhatToDoSecond,
  boxWhatToDoThird,
  boxButtonIcon,
  boxButtonTitle,
  boxButtonDescription,
  boxOtherButtonIcon,
  boxOtherButtonTitle,
  boxOtherButtonDescription,
}) => {
  const whatToDo = [boxWhatToDoFirst, boxWhatToDoSecond, boxWhatToDoThird];

  return (
    <div className="projectes-template" style={{ backgroundColor }}>
      <div className="projectes-title">Projectes {title}</div>

      <div className="projectes-subtitle">{subtitle}</div>

      <div className="projectes-box">
        <div className="projectes-box-image-wrapper">
          <img src={boxLogo} alt="Logo" />
        </div>

        <div className="projectes-box-text-wrapper">
          <div className="box-title">{boxTitle}</div>
          <div className="box-subtitle">{boxSubtitle}</div>
          <div className="box-description">{boxDescription}</div>

          <div className="box-que-faras">Què hi podràs fer?</div>

          <div className="box-to-do-wrapper">
            {whatToDo.map((item, index) => (
              <div className="box-to-do-text" key={index}>
                <FaCheck />
                {item}
              </div>
            ))}
          </div>

          <div className="box-line" />
          <div className="box-button-wrapper">
            <div className="box-button-left">
              <button>
                {boxButtonIcon}
                {boxButtonTitle}
                {boxButtonDescription}
              </button>
              o
              <button>
                {boxOtherButtonIcon}
                {boxOtherButtonTitle}
                {boxOtherButtonDescription}
              </button>
            </div>
            <div className="box-button-right">
              <ProjectesButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectesTemplate;
