import "./MenuTitle.css";
import ProjectesButton from "./ProjectesButton";
const MenuTitle = ({
  title,
  subtitle,
  description,
  subdescription,
  subestdescription,
  backgroundColor,
  secondText,
  buttons,
  border,
  text,
  firstBg,
  secondBg,
  secondTextColor,
}) => {
  return (
    <div className="menu-title" style={{ backgroundColor }}>
      <div className="menu-title-wrapper" data-reveal>
        <div className="menu-title-title">{title}</div>
        <div className="menu-title-subtitle">{subtitle}</div>
        <div className="menu-title-description">{description}</div>
        <div className="menu-title-description">{subdescription}</div>
        <div className="menu-title-description">{subestdescription}</div>
        {buttons && <ProjectesButton text={text} firstBg={firstBg} secondBg={secondBg} secondText={secondText} border={border} secondTextColor={secondTextColor}/>}
      </div>
    </div>
  );
};

export default MenuTitle;
