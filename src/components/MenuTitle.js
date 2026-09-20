import "./MenuTitle.css";
const MenuTitle = ({ title, subtitle, description, subdescription, subestdescription, backgroundColor }) => {
  return (
    <div className="menu-title" style={{ backgroundColor }}>
      <div className="menu-title-wrapper">
        <div className="menu-title-title">{title}</div>
        <div className="menu-title-subtitle">{subtitle}</div>
        <div className="menu-title-description">{description}</div>
        <div className="menu-title-description">{subdescription}</div>
        <div className="menu-title-description">{subestdescription}</div>
      </div>
    </div>
  );
};

export default MenuTitle;
