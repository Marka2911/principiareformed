import "./ProjectesButton.css"

const ProjectesButton = ({ text, firstBg, secondBg, secondText }) => {
  return (
    <div className="projectes-button-wrapper">
      <button className="projectes-button-buttons" style={{background: firstBg}}>{text}</button>
      <button className="projectes-button-buttons" style={{background: secondBg}}>{secondText}</button>
    </div>
  );
};

export default ProjectesButton;
