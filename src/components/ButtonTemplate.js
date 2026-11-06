import './ButtonTemplate.css';
const ButtonTemplate = ({
  text,
  icon: Icon,
  border,
  background,
  color,
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      {...props}
      className="template-button"
      style={{backgroundColor: background, border: border, color: color}}
    >
      {Icon && <Icon />}
      {text}
    </Component>
  );
};

export default ButtonTemplate;
