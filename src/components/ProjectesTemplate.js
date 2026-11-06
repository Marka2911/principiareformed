import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./ProjectesTemplate.css";
import ProjectesButton from "./ProjectesButton.js";
import { IoIosRadioButtonOn } from "react-icons/io";
import Line from "./Line.js";

const ProjectesTemplate = ({
  backgroundColor,
  title,
  subtitle,
  boxLogo,
  boxTitle,
  boxSubtitle,
  boxSubtitleActive,
  boxDescription,
  boxItemTitle,
  boxWhatToDoFirst,
  boxItemTitleSecond,
  boxWhatToDoSecond,
  boxItemTitleThird,
  boxWhatToDoThird,
  boxButtonIcon,
  boxButtonTitle,
  boxButtonDescription,
  boxOtherButtonIcon,
  boxOtherButtonTitle,
  boxOtherButtonDescription,
  boxNotFunciontingButtonText,
  boxNotFunciontingButtonBackground,

  // EL TEXT EXTRA DEL POPUP
  boxDetailTextP1,
  boxDetailTextP2,
  boxDetailTextP3,
  boxDetailTextP4,
}) => {
  const [detallAmpliat, setDetallAmpliat] = useState(false);

  const whatToDo = [
    {
      title: boxItemTitle,
      description: boxWhatToDoFirst,
    },
    {
      title: boxItemTitleSecond,
      description: boxWhatToDoSecond,
    },
    {
      title: boxItemTitleThird,
      description: boxWhatToDoThird,
    },
  ];

  const renderProjectBox = (isPopup = false) => {
    return (
      <div className={`projectes-box ${isPopup ? "projectes-box-popup" : ""}`} data-reveal={isPopup ? undefined : "fade"}>
        <div className="projectes-box-image-wrapper">
          <img src={boxLogo} alt="Logo" />
        </div>

        <div className="projectes-box-text-wrapper">
          <div className="box-title">{boxTitle}</div>

          <div
            className="box-subtitle"
            style={{ backgroundColor: backgroundColor }}
          >
            <IoIosRadioButtonOn style={{ color: boxSubtitleActive }} />

            {boxSubtitle}
          </div>

          <div className="box-description">{boxDescription}</div>

          <div className="box-que-faras">Què hi podràs fer?</div>

          <div className="box-to-do-wrapper">
            {whatToDo.map((item, index) => (
              <div className="box-to-do-text" key={index}>
                <FaCheck className="box-to-do-icon" />

                <div className="box-to-do-title">{item.title}</div>

                <div className="box-to-do-description">{item.description}</div>
              </div>
            ))}
          </div>

          {/* NOMÉS APAREIX AL POPUP */}
          {isPopup && (
            <div className="box-detail-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis hendrerit tortor. Nam sit amet vehicula dolor, eu
                interdum odio. Vivamus in condimentum purus. Aenean orci ipsum,
                vestibulum sed nisi fringilla, varius hendrerit lacus. Duis non
                urna eget elit euismod ultrices ac in odio. Vivamus viverra ante
                quis commodo luctus. Pellentesque pulvinar dui in dolor
                sollicitudin consequat. Vestibulum sapien nisl, consectetur id
                augue nec, volutpat pulvinar nulla. Ut varius ante ut enim
                facilisis, sed mattis ante fringilla. Sed consectetur, sapien ac
                hendrerit viverra, odio tellus faucibus lacus, eu imperdiet ex
                tellus sit amet sem. Quisque nec faucibus diam. Etiam eros
                tortor, blandit in purus eget, bibendum consequat lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis hendrerit tortor. Nam sit amet vehicula dolor, eu
                interdum odio. Vivamus in condimentum purus. Aenean orci ipsum,
                vestibulum sed nisi fringilla, varius hendrerit lacus. Duis non
                urna eget elit euismod ultrices ac in odio. Vivamus viverra ante
                quis commodo luctus. Pellentesque pulvinar dui in dolor
                sollicitudin consequat. Vestibulum sapien nisl, consectetur id
                augue nec, volutpat pulvinar nulla. Ut varius ante ut enim
                facilisis, sed mattis ante fringilla. Sed consectetur, sapien ac
                hendrerit viverra, odio tellus faucibus lacus, eu imperdiet ex
                tellus sit amet sem. Quisque nec faucibus diam. Etiam eros
                tortor, blandit in purus eget, bibendum consequat lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis hendrerit tortor. Nam sit amet vehicula dolor, eu
                interdum odio. Vivamus in condimentum purus. Aenean orci ipsum,
                vestibulum sed nisi fringilla, varius hendrerit lacus. Duis non
                urna eget elit euismod ultrices ac in odio. Vivamus viverra ante
                quis commodo luctus. Pellentesque pulvinar dui in dolor
                sollicitudin consequat. Vestibulum sapien nisl, consectetur id
                augue nec, volutpat pulvinar nulla. Ut varius ante ut enim
                facilisis, sed mattis ante fringilla. Sed consectetur, sapien ac
                hendrerit viverra, odio tellus faucibus lacus, eu imperdiet ex
                tellus sit amet sem. Quisque nec faucibus diam. Etiam eros
                tortor, blandit in purus eget, bibendum consequat lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis hendrerit tortor. Nam sit amet vehicula dolor, eu
                interdum odio. Vivamus in condimentum purus. Aenean orci ipsum,
                vestibulum sed nisi fringilla, varius hendrerit lacus. Duis non
                urna eget elit euismod ultrices ac in odio. Vivamus viverra ante
                quis commodo luctus. Pellentesque pulvinar dui in dolor
                sollicitudin consequat. Vestibulum sapien nisl, consectetur id
                augue nec, volutpat pulvinar nulla. Ut varius ante ut enim
                facilisis, sed mattis ante fringilla. Sed consectetur, sapien ac
                hendrerit viverra, odio tellus faucibus lacus, eu imperdiet ex
                tellus sit amet sem. Quisque nec faucibus diam. Etiam eros
                tortor, blandit in purus eget, bibendum consequat lacus.
              </p>
            </div>
          )}

          <Line />

          <div className="box-button-wrapper">
            {boxNotFunciontingButtonText !== undefined ? (
              <button
                className="box-button-left"
                style={{
                  backgroundColor: boxNotFunciontingButtonBackground,
                  border: "1px solid var(--primary-color)",
                }}
              >
                <div className="box-button-left-text">
                  <div className="box-butotn-left-text-title">
                    {boxNotFunciontingButtonText}
                  </div>
                </div>
              </button>
            ) : (
              <div className="box-button-left-wrapper">
                <button className="box-button-left">
                  <div className="box-button-left-icon">{boxButtonIcon}</div>

                  <div className="box-button-left-text">
                    <div className="box-butotn-left-text-title">
                      {boxButtonTitle}
                    </div>

                    <div className="box-button-left-text-subtitle">
                      {boxButtonDescription}
                    </div>
                  </div>
                </button>
                o
                <button className="box-button-left">
                  <div className="box-button-left-icon">
                    {boxOtherButtonIcon}
                  </div>

                  <div className="box-button-left-text">
                    <div className="box-butotn-left-text-title">
                      {boxOtherButtonTitle}
                    </div>

                    <div className="box-button-left-text-subtitle">
                      {boxOtherButtonDescription}
                    </div>
                  </div>
                </button>
              </div>
            )}

            <div
              onClick={() => {
                if (isPopup) {
                  setDetallAmpliat(false);
                } else {
                  setDetallAmpliat(true);
                }
              }}
            >
              <ProjectesButton
                text={isPopup ? "Tancar Detall" : "Veure Detall"}
                firstBg="var(--primarydark-color)"
                secondText="Compartir"
                secondBg="var(--primary-color)"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="projectes-template" style={{ backgroundColor }}>
        <div className="projectes-title" data-reveal>Projectes {title}</div>

        <div className="projectes-subtitle" data-reveal="fade" data-reveal-delay="70">{subtitle}</div>

        {renderProjectBox()}
      </div>

      {detallAmpliat && (
        <div className="projectes-popup-overlay">
          <div className="projectes-popup-container">
            {renderProjectBox(true)}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectesTemplate;
