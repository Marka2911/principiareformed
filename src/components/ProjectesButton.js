import "./ProjectesButton.css"

const ProjectesButton = ({ text, firstBg, secondBg, secondText, border, secondTextColor  }) => {
  return (
    <div className="projectes-button-wrapper">
      <button className="projectes-button-buttons" style={{background: firstBg}}>{text}</button>
      <button className="projectes-button-buttons" style={{background: secondBg, border: border, color: secondTextColor}}>{secondText}</button>
    </div>
  );
};

export default ProjectesButton;
