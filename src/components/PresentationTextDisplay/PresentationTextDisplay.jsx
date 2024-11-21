import './presentation-text-display.scss';
import PropTypes from 'prop-types';

export default function PresentationTextDisplay({ text, color }) {
    return (
        <div
            className={`presentation-text-display ${text ? 'expanded' : ''}`}
            style={{ backgroundColor: color }}
        >
            {text && <p>{text}</p>}
        </div>
    );
}

PresentationTextDisplay.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
