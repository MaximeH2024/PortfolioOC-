import './skills-display.scss';
import SkillsDetails from '../SkillsDetails/SkillsDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe, faServer, faTable, faChartLine, faBrain, faUniversalAccess, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faReact, faCss3Alt, faJs, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import skillsData from '../../data/skills.json';
import { useLanguage } from '../../context/LanguageContext';

export default function SkillsDisplay() {
    const { language } = useLanguage();

    // Transformer les compétences pour qu'elles incluent les noms et descriptions dans la langue sélectionnée
    const transformSkills = (skills) => {
        return Object.entries(skills).reduce((acc, [key, value]) => {
            acc[key] = {
                name: value.name[language],
                description: value.description[language],
            };
            return acc;
        }, {});
    };

    return (
        <div className="skills-display-container">
                <div className="display-container-left">
                    <SkillsDetails
                        title={skillsData.frontEnd.title[language]}
                        skills={transformSkills(skillsData.frontEnd.skills)}
                        color={skillsData.frontEnd.color}
                    />
                </div>
            <div className="skills-display">
                <h2>{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
                <div className="skills-display-main">
                    <div className="first-part-skills-display">
                        {/* Front-End */}
                        <div className="circle-skills-container front-end">
                            <div className="rotating-border"></div>
                            <div className="rotating-border secondary"></div>
                            <div className="circle-content">
                                <img src="src/assets/front-end-logo.png" alt="front-end-logo" />
                                <p><strong>{language === 'fr' ? 'Front-End' : 'Front-End'}</strong></p>
                            </div>
                            <div className="circle-icons-container">
                                <FontAwesomeIcon icon={faHtml5} className="icon icon-html" />
                                <FontAwesomeIcon icon={faCss3Alt} className="icon icon-css" />
                                <FontAwesomeIcon icon={faJs} className="icon icon-js" />
                                <FontAwesomeIcon icon={faReact} className="icon icon-react" />
                            </div>
                        </div>

                        <div className="transition-effect">
                            <div className="sonar sonar-front-end"></div>
                            <div className="sonar sonar-back-end"></div>
                            <div className="sonar sonar-global"></div>
                            <FontAwesomeIcon icon={faBrain} size="3x" />
                        </div>

                        <div className="circle-skills-container back-end">
                            <div className="rotating-border"></div>
                            <div className="rotating-border secondary"></div>
                            <div className="circle-content">
                                <FontAwesomeIcon icon={faDatabase} size="lg" />
                                <p><strong>{language === 'fr' ? 'Back-End' : 'Back-End'}</strong></p>
                            </div>
                            <div className="circle-icons-container">
                                <FontAwesomeIcon icon={faNodeJs} className="icon icon-nodejs" />
                                <FontAwesomeIcon icon={faServer} className="icon icon-express" />
                                <FontAwesomeIcon icon={faDatabase} className="icon icon-mongodb" />
                                <FontAwesomeIcon icon={faTable} className="icon icon-crud" />
                            </div>
                        </div>
                    </div>
                    <div className="circle-skills-container global">
                        <div className="rotating-border"></div>
                        <div className="rotating-border secondary"></div>
                        <div className="circle-content ">
                            <FontAwesomeIcon icon={faGlobe} size="lg" />
                            <p><strong>{language === 'fr' ? 'Web' : 'Web'}</strong></p>
                        </div>
                        <div className="circle-icons-container">
                            <FontAwesomeIcon icon={faChartLine} className="icon icon-seo" />
                            <FontAwesomeIcon icon={faUniversalAccess} className="icon icon-accessibility" />
                            <FontAwesomeIcon icon={faTasks} className="icon icon-agile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="display-container-right">
                <SkillsDetails
                    title={skillsData.backEnd.title[language]}
                    skills={transformSkills(skillsData.backEnd.skills)}
                    color={skillsData.backEnd.color}
                />
                <SkillsDetails
                    title={skillsData.globalWeb.title[language]}
                    skills={transformSkills(skillsData.globalWeb.skills)}
                    color={skillsData.globalWeb.color}
                />
            </div>
        </div>
    );
}
