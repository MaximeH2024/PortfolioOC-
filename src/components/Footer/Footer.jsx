import { useState, useEffect } from 'react';
import './footer.scss';

export default function Footer() {
    const [headerContent, setHeaderContent] = useState(null);

    useEffect(() => {
        const header = document.querySelector('.header');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    // Récupérer et redimensionner les éléments de l'en-tête
                    const headerLeft = document.querySelector('.header-left')?.innerHTML || '';
                    const headerRight = document.querySelector('.header-right')?.innerHTML || '';
                    const headerMainIcons = document.querySelector('.header-main-icon')?.innerHTML || '';

                    // Ajouter une classe spécifique aux images
                    const modifiedContent = `
                        <div class="footer-header-content">
                            <div>${headerLeft}</div>
                            <div class="footer-icons">${headerMainIcons}</div>
                            <div>${headerRight}</div>
                        </div>
                    `;

                    setHeaderContent(
                        <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
                    );
                } else {
                    setHeaderContent(null);
                }
            },
            { root: null, threshold: 0 }
        );

        if (header) {
            observer.observe(header);
        }

        return () => {
            if (header) observer.unobserve(header);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-title">HOUGUET Maxime Portfolio</div>
            {headerContent && <div className="footer-dynamic-content">{headerContent}</div>}
        </footer>
    );
}
