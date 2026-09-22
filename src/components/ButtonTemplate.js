import './ButtonTemplate.css';
const ButtonTemplate = ({ text, icon: Icon, border, background, color }) => {
  return (
    <button className="template-button" style={{backgroundColor: background, border: border, color: color}}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default ButtonTemplate;