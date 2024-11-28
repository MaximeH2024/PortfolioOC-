import './skills-details.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SkillsDetails({ title, skills, color }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDetails = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="skills-details-container">
            <div
                className="toggle-box"
                style={{
                    backgroundColor: color,
                    top: '-10px',
                    left: '-10px',
                }}
                onClick={toggleDetails}
                title={isOpen ? "Masquer les détails" : "Afficher les détails"}
            ></div>
            <div
                className={`skills-details ${isOpen ? "open" : "closed"}`}
                style={{ borderColor: color }}
            >
                <h4 style={{ borderColor: color }}>{title}</h4>
                <ul>
                    {Object.entries(skills).map(([, { name, description }], index) => (
                        <li key={index}>
                            <strong>{name} :</strong> {description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

SkillsDetails.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.object.isRequired, // Chaque compétence contient un `name` et une `description`
    color: PropTypes.string.isRequired,
};
