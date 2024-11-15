// PresentationBubble.jsx
import './presentation-bubble.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function PresentationBubble({ color = '#000000', text = 'Texte par défaut', className }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`presentation-bubble`}
            style={{ backgroundColor: color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className={`${className}`} style={{ color }}>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}


// Définition des propTypes
PresentationBubble.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};
