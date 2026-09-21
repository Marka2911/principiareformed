import { FaCheck } from "react-icons/fa";
import "./ProjectesTemplate.css";
import ProjectesButton from "./ProjectesButton.js";
import { IoIosRadioButtonOn } from "react-icons/io";
import Line from "./Line.js"
const ProjectesTemplate = ({
  backgroundColor,
  title,
  subtitle,
  boxLogo,
  boxTitle,
  boxSubtitle,
  boxSubtitleActive,
  boxDescription,
  boxItemTitle,
  boxWhatToDoFirst,
  boxItemTitleSecond,
  boxWhatToDoSecond,
  boxItemTitleThird,
  boxWhatToDoThird,
  boxButtonIcon,
  boxButtonTitle,
  boxButtonDescription,
  boxOtherButtonIcon,
  boxOtherButtonTitle,
  boxOtherButtonDescription,
  boxNotFunciontingButtonText,
  boxNotFunciontingButtonBackground,
}) => {
  const whatToDo = [
    {
      title: boxItemTitle,
      description: boxWhatToDoFirst,
    },
    {
      title: boxItemTitleSecond,
      description: boxWhatToDoSecond,
    },
    {
      title: boxItemTitleThird,
      description: boxWhatToDoThird,
    },
  ];
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
          <div className="box-subtitle" style={{backgroundColor: backgroundColor}}>
            <IoIosRadioButtonOn style={{ color: boxSubtitleActive }} />{" "}
            {boxSubtitle}
          </div>
          <div className="box-description">{boxDescription}</div>
          <div className="box-que-faras">Què hi podràs fer?</div>
          <div className="box-to-do-wrapper">
            {whatToDo.map((item, index) => (
              <div className="box-to-do-text" key={index}>
                <FaCheck className="box-to-do-icon" />
                <div className="box-to-do-title">{item.title}</div>
                <div className="box-to-do-description">{item.description}</div>
              </div>
            ))}
          </div>
          <Line />
          <div className="box-button-wrapper">
            {boxNotFunciontingButtonText !== undefined ? (
              <button
                className="box-button-left"
                style={{
                  backgroundColor: boxNotFunciontingButtonBackground,
                  border: "1px solid var(--primary-color)",
                }}
              >
                <div className="box-button-left-text">
                  <div className="box-butotn-left-text-title">
                    {boxNotFunciontingButtonText}
                  </div>
                </div>
              </button>
            ) : (
              <div className="box-button-left-wrapper">
                <button className="box-button-left">
                  <div className="box-button-left-icon">{boxButtonIcon}</div>
                  <div className="box-button-left-text">
                    <div className="box-butotn-left-text-title">
                      {boxButtonTitle}
                    </div>
                    <div className="box-button-left-text-subtitle">
                      {boxButtonDescription}
                    </div>
                  </div>
                </button>
                o
                <button className="box-button-left">
                  <div className="box-button-left-icon">
                    {boxOtherButtonIcon}
                  </div>
                  <div className="box-button-left-text">
                    <div className="box-butotn-left-text-title">
                      {boxOtherButtonTitle}
                    </div>
                    <div className="box-button-left-text-subtitle">
                      {boxOtherButtonDescription}
                    </div>
                  </div>
                </button>
              </div>
            )}

            <ProjectesButton
              text={"Veure Detall"}
              firstBg={"var(--primarydark-color)"}
              secondText={"Compartir"}
              secondBg={"var(--primary-color"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectesTemplate;
