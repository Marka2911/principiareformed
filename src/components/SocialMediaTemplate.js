import "./SocialMediaTemplate.css"

const SocialMediaTemplate = ({icon, title}) => {
    return ( <div className="social-media-template">
        <div className="contacte-email-title-small-icon">
            {icon}
        </div>
        <div className="sm-text-name">
            <div className="sm-title">
                {title}
            </div>
            <div className="contacte-email-title-small">
                cooprincipia
            </div>
        </div>
        <div className="sm-button-open">
            <button className="sm-button-open-style"> Obrir </button>
        </div>
    </div> );
}
 
export default SocialMediaTemplate;