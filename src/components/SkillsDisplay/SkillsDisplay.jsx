import './skills-display.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe, faServer, faTable, faChartLine, faBrain, faUniversalAccess, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faReact, faCss3Alt, faJs, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function SkillsDisplay() {
    return (
        <div className="skills-display">
            <h2>Compétences</h2>
            <div className='first-part-skills-display'>
                {/* Front-End */}
                <div className="circle-skills-container front-end">
                    <div className="rotating-border"></div>
                    <div className="rotating-border secondary"></div>
                    <div className="circle-content">
                        <img src="src/assets/front-end-logo.png" alt="front-end-logo" />
                        <p><strong>Front-End</strong></p>
                    </div>
                    {/* Conteneur des icônes en mouvement */}
                    <div className="circle-icons-container">
                        <FontAwesomeIcon icon={faHtml5} className="icon icon-html" />
                        <FontAwesomeIcon icon={faCss3Alt} className="icon icon-css" />
                        <FontAwesomeIcon icon={faJs} className="icon icon-js" />
                        <FontAwesomeIcon icon={faReact} className="icon icon-react" />
                    </div>
                </div>

                {/* Transition Space */}
                <div className='transition-effect'>
                    <div className="sonar sonar-front-end"></div>
                    <div className="sonar sonar-back-end"></div>
                    <div className="sonar sonar-global"></div>
                    <FontAwesomeIcon icon={faBrain} size='3x'/>
                </div>
            
                {/* Back-End */}
                <div className="circle-skills-container back-end">
                    <div className="rotating-border"></div>
                    <div className="rotating-border secondary"></div>
                    <div className="circle-content">
                        <FontAwesomeIcon icon={faDatabase} size='lg'/>
                        <p><strong>Back-End</strong></p>
                    </div>
                    <div className="circle-icons-container">
                        <FontAwesomeIcon icon={faNodeJs} className="icon icon-nodejs"/>
                        <FontAwesomeIcon icon={faServer} className="icon icon-express"/>
                        <FontAwesomeIcon icon={faDatabase} className="icon icon-mongodb"/>
                        <FontAwesomeIcon icon={faTable} className="icon icon-crud"/>
                    </div>
                </div>
            </div>

            {/* Global Web */}
            <div className="circle-skills-container global">
                <div className="rotating-border"></div>
                <div className="rotating-border secondary"></div>
                <div className="circle-content ">
                    <FontAwesomeIcon icon={faGlobe} size='lg' />
                    <p><strong>Web</strong></p>
                </div>
                <div className="circle-icons-container">
                    <FontAwesomeIcon icon={faChartLine} className="icon icon-seo"/> 
                    <FontAwesomeIcon icon={faUniversalAccess} className="icon icon-accessibility"/>
                    <FontAwesomeIcon icon={faTasks} className="icon icon-agile"/>
                </div>
            </div>
        </div>
    );
}

