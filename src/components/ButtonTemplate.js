import './ButtonTemplate.css';
const ButtonTemplate = ({ text, icon: Icon, border, background }) => {
  return (
    <button className="template-button" style={{backgroundColor: background, border: border}}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default ButtonTemplate;