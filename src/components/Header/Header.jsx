import { useState, useEffect } from 'react';
import HeaderLeft from '../headerLeft/headerLeft';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderRight from '../headerRight/headerRight';
import './header.scss';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Mettre à jour l'état en fonction de la taille de l'écran
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="header">
            {/* Afficher HeaderLeft et HeaderRight soit dans Header soit dans HeaderMain */}
            {!isMobile && <HeaderLeft />}
            <HeaderMain isMobile={isMobile} />
            {!isMobile && <HeaderRight />}
        </div>
    );
}
