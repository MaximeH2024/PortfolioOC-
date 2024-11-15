import './skills-display.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function SkillsDisplay() {
    return (
        <div className="skills-display">
            <div className="circle front-end">
                <FontAwesomeIcon icon={faReact} />
                <p>Front-End</p>
            </div>
            <div className="circle back-end">
                <FontAwesomeIcon icon={faDatabase} />
                <p>Back-End</p>
            </div>
            <div className="circle global">
                <FontAwesomeIcon icon={faGlobe} />
                <p>Global Web</p>
            </div>
        </div>
    );
}
