import './presentation-effect.scss';
import { useState, useEffect } from 'react';
import PresentationBubble from '../PresentationBubble/PresentationBubble';
import PresentationTextDisplay from '../PresentationTextDisplay/PresentationTextDisplay';
import PresentationData from '../../data/presentation.json';
import { useLanguage } from '../../context/LanguageContext';
import headPicture from '../../assets/test.png';

export default function PresentationEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredBubble, setHoveredBubble] = useState(null); // Gérer la bulle survolée
    const { language } = useLanguage();

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

    const getTextByLanguage = (id) => {
        const data = PresentationData.find((item) => item.id === id);
        return data ? data[`text_${language}`] : 'Texte introuvable';
    };

    return (
        <div className="presentation-effect">
            <img src={headPicture} alt="Test" className="fixed-image" />

            {/* Affichage dynamique dans PresentationTextDisplay */}
            <PresentationTextDisplay
                text={hoveredBubble ? getTextByLanguage(hoveredBubble.id) : ''}
                color={hoveredBubble ? hoveredBubble.color : '#000000'}
            />

            {/* Bulles interactives */}
            <div
                className="circle-container outer-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px) translateZ(400px)`
                }}
            >
                <div className="circle outer-circle"></div>
                <div className="circle-overlay outer-circle-overlay"></div>
            </div>
            <div
                className="circle-container main-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.09}px, ${mousePosition.y * 0.09}px) translateZ(250px)`
                }}
            >
                <div className="main-presentation-circle">
                    <PresentationBubble
                        color="#CC4E4E"
                        text={getTextByLanguage(1)}
                        className="bubble-text-1"
                        onHover={() => setHoveredBubble({ id: 1, color: '#CC4E4E' })}
                        onLeave={() => setHoveredBubble(null)}
                    />
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
                <div className="second-presentation-circle">
                    <PresentationBubble
                        color="#2ECC71"
                        text={getTextByLanguage(2)}
                        className="bubble-text-2"
                        onHover={() => setHoveredBubble({ id: 2, color: '#2ECC71' })}
                        onLeave={() => setHoveredBubble(null)}
                    />
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
                <div className="third-presentation-circle">
                    <PresentationBubble
                        color="#4A6EF5"
                        text={getTextByLanguage(3)}
                        className="bubble-text-3"
                        onHover={() => setHoveredBubble({ id: 3, color: '#4A6EF5' })}
                        onLeave={() => setHoveredBubble(null)}
                    />
                </div>
                <div className="circle third-circle"></div>
                <div className="circle-overlay third-circle-overlay"></div>
            </div>

            <div
                className="circle-container fourth-circle-container"
                style={{
                    transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) translateZ(-250px)`
                }}
            >
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
