import ButtonTemplate from "./ButtonTemplate";
import { MdArrowOutward } from "react-icons/md";
import "./EntitatsTemplate.css";
const EntitatsTemplate = ({ logo1, logo2, title, subtitle, description }) => {
  return (
    <div className="entitats-template-wrapper">
      <div className="entitats-template-images">
        <img src={logo1} />
        <img src={logo2} />
      </div>
      <div className="entitats-template-info">
        <div className="entitats-template-title">{title}</div>
        <div className="entitats-template-subtitle">{subtitle}</div>
        <div className="entitats-template-description">{description}</div>
        <div className="entitats-template-subtitle left">Lleguir més</div>
        <div className="entitats-template-button">
          <ButtonTemplate
            text={"Visitar web"}
            icon={MdArrowOutward}
            background={"transparent"}
            border={"1px solid var(--primarydark-color)"}
            color={"var(--primarydark-color)"}
          />
        </div>
      </div>
    </div>
  );
};

export default EntitatsTemplate;
