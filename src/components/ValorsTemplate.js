import ButtonTemplate from "./ButtonTemplate";
import Line from "./Line"
import "./ValorsTemplate.css"
const ValorsTemplate = ({ valorsLogo, valorsTitle, valorsDescription, background }) => {
  return (
    <div className="valors-template">
      <div className="valors-template-wrapper">
        <div className="valors-template-info" data-reveal>
          <div className="valors-template-upper">
            <div className="valors-template-logo">{valorsLogo}</div>
            <div className="valors-template-text">
              <div className="valors-template-text-title">{valorsTitle}</div>
              <div className="valors-template-text-description">
                {valorsDescription}
              </div>
            </div>
          </div>
          <div className="valors-template-lower">
            <ButtonTemplate text={"Lleguir més"} />
          </div>
        </div>

        <div className="valors-template-video" data-reveal="fade" data-reveal-delay="70">
          <div className="valors-template-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Line/>
    </div>
  );
};

export default ValorsTemplate;
