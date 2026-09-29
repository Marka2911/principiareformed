import './ThirdSection.css';
import logo from './assets/frame_44.png';
import logoDemarquia from './assets/logo_demarquia.png';
import logoCuria from './assets/logo_curia.png';
import { Link } from 'react-router-dom';
function ThirdSection() {
    return (<div className="third-section">
        <div className="third-section-wrapper">
            <div className="third-section-text-wrapper">
                <div className="third-section-text-title">
                    Projectes
                </div>
                <div className="third-section-text-subtitle">
                    Les eines que construïm per obrir camí.
                </div>
                <div className="third-section-text-description">
                    Creem projectes amb una doble finalitat: en primera instància, per pressionar el sector públic perquè actuï d’acord amb els valors i necessitats que defensem; i en segona instància, per fomentar nosaltres mateixos allò que el sector públic no arriba a cobrir. És per aquest motiu que hem creat el nostre primer projecte, Demarquia, i actualment estem elaborant un segon, Curia Qualitas.
                </div>
            </div>
            <div className="third-section-image-wrapper">
                <img src={logo} alt="Principia Logo" className="third-section-image" />
            </div>
        </div>
        <div className="third-section-projects-wrapper">
            <div className="third-section-demarquia-wrapper">
                <div className="third-section-demarquia-first-wrapper">
                    <div className="third-section-demarquia-first-wrapper-text">
                        Participacio ciutadana
                    </div>
                    <img src={logoDemarquia} alt="Principia Logo" className="third-section-demarquia-image" />
                </div>
                <div className="third-section-demarquia-second-wrapper">
                    <div className="third-section-demarquia-second-wrapper-text">
                        Demarquia
                    </div>
                    <div>
                        Plataforma de participació ciutadana per a una gestió pública més participativa, justa i eficient. El nostre primer projecte operatiu.
                    </div>
                </div>
                <div className="third-section-demarquia-third-wrapper">
                    <Link key="projectes" to="projectes">
                        Saber més →
                    </Link>
                    <div>
                        ↗ Obrir Online
                    </div>
                </div>
            </div>
            <div className="third-section-demarquia-wrapper">
                <div className="third-section-demarquia-first-wrapper">
                    <div className="third-section-demarquia-first-wrapper-text">
                        En desenvolupament
                    </div>
                    <img src={logoCuria} alt="Principia Logo" className="third-section-demarquia-image" />
                </div>
                <div className="third-section-demarquia-second-wrapper">
                    <div className="third-section-demarquia-second-wrapper-text">
                        Curia Qualitas
                    </div>
                    <div>
                        El nostre segon projecte, actualment en fase d'elaboració, orientat a ampliar l'impacte de la cooperativa en el sector públic.
                    </div>
                </div>
                <div className="third-section-demarquia-third-wrapper">
                    <Link key="projectes" to="projectes">
                        Saber més →
                    </Link>
                    <div>
                        ↗ Obrir Online
                    </div>
                </div>
            </div>
        </div>
        <div className="third-section-footer">
            <Link key="projectes" to="/projectes">
                Veure tots els projectes →
            </Link>
        </div>
    </div>);
}

export default ThirdSection;