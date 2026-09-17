import './ButtonTemplate.css';
const ButtonTemplate = ({ text, icon: Icon }) => {
  return (
    <button className="template-button">
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default ButtonTemplate;