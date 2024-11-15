// PresentationBubble.jsx
import './presentation-bubble.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function PresentationBubble({ color, text }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="presentation-bubble"
            style={{ backgroundColor: color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="bubble-text" style={{ color }}>
                    {text}
                </div>
            )}
        </div>
    );
}

// Définition des propTypes
PresentationBubble.propTypes = {
    color: PropTypes.string.isRequired, // color doit être une chaîne de caractères et est requis
    text: PropTypes.string.isRequired,  // text doit être une chaîne de caractères et est requis
};

// Valeurs par défaut (optionnel)
PresentationBubble.defaultProps = {
    color: '#000000',
    text: 'Texte par défaut',
};
