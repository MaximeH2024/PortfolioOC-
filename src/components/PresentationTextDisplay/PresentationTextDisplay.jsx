import { useState, useEffect } from 'react';
import './presentation-text-display.scss';
import PropTypes from 'prop-types';

export default function PresentationTextDisplay({ text, color }) {
    const [showText, setShowText] = useState(false);
    
    useEffect(() => {
        if (text) {
            const timeout = setTimeout(() => setShowText(true), 1000);
            return () => clearTimeout(timeout);
        } else {
            setShowText(false);
        }
    }, [text]);

    return (
        <div
            className={`presentation-text-display ${text ? 'expanded' : ''}`}
            style={{ backgroundColor: color }}
        >
            {showText && <p>{text}</p>}
        </div>
    );
}

PresentationTextDisplay.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
