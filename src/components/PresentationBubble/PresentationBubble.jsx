import './presentation-bubble.scss';
import PropTypes from 'prop-types';

export default function PresentationBubble({ color, text, className, onHover, onLeave }) {
    return (
        <div
            className={"presentation-bubble"}
            style={{ backgroundColor: color }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        ></div>
    );
}

PresentationBubble.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onHover: PropTypes.func,
    onLeave: PropTypes.func,
};
