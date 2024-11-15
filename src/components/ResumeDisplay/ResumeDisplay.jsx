import { useEffect, useRef, useState } from 'react';
import './resume-display.scss';

export default function ResumeDisplay() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Facultatif : cache à nouveau si nécessaire
                }
            },
            {
                root: null, // Par défaut, observe le viewport
                rootMargin: '0px', // Définissez un espace autour de la fenêtre d'observation
                threshold: 0.2, // L'animation se déclenche lorsque 20% de l'élément est visible
            }
        );
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    

    return (
        <div
            className={`resume-display ${isVisible ? 'animate' : ''}`}
            ref={ref}
        >
            <img src="/src/assets/folder.png" alt="Resume" />
        </div>
    );
}
