// PresentationEffect.jsx
import './presentation-effect.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import PresentationBubble from '../PresentationBubble/PresentationBubble';

export default function PresentationEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setMousePosition({ x, y });
        };

        const container = document.querySelector('.presentation-effect');
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="presentation-effect">
            <FontAwesomeIcon icon={faReact} className='fixed-icon' size='xl' />

            <div
                className="circle-container outer-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px) translateZ(300px)`
                }}
            >
                <div className="circle outer-circle"></div>
                <div className="circle-overlay outer-circle-overlay"></div>
            </div>
            <div
                className="circle-container main-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.09}px, ${mousePosition.y * 0.09}px) translateZ(150px)`
                }}
            >
                <div className="main-presentation-circle" style={{ color: "#CC4E4E" }}>
                    <PresentationBubble color="#CC4E4E" text="Texte pour le main-circle" />
                </div>
                <div className="circle main-circle"></div>
                <div className="circle-overlay main-circle-overlay"></div>
            </div>
            <div
                className="circle-container second-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.07}px, ${mousePosition.y * 0.07}px) translateZ(0px)`
                }}
            >
                <div className="second-presentation-circle" style={{ color: "#2ECC71" }}>
                    <PresentationBubble color="#2ECC71" text="Texte pour le second-circle" />
                </div>
                <div className="circle second-circle"></div>
                <div className="circle-overlay second-circle-overlay"></div>
            </div>
            <div
                className="circle-container third-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) translateZ(-150px)`
                }}
            >
                <div className="circle third-circle"></div>
                <div className="circle-overlay third-circle-overlay"></div>
            </div>
            <div
                className="circle-container fourth-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) translateZ(-250px)`
                }}
            >
                <div className="third-presentation-circle" style={{ color: "#4A6EF5" }}>
                    <PresentationBubble color="#4A6EF5" text="Texte pour le third-circle" />
                </div>
                <div className="circle fourth-circle"></div>
                <div className="circle-overlay fourth-circle-overlay"></div>
            </div>
            <div
                className="circle-container last-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateZ(-300px)`
                }}
            >
                <div className="circle last-circle"></div>
                <div className="circle-overlay last-circle-overlay"></div>
            </div>
        </div>
    );
}
