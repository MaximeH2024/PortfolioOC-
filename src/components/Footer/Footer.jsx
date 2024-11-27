import { useState, useEffect } from 'react';
import HeaderLeft from '../HeaderLeft/HeaderLeft';
import HeaderRight from '../HeaderRight/HeaderRight';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const [showHeaderContent, setShowHeaderContent] = useState(false);

    useEffect(() => {
        const header = document.querySelector('.header');
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowHeaderContent(!entry.isIntersecting);
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
        <footer className="footer footer-component">
            {/* Cache le titre si showHeaderContent est actif */}
            {!showHeaderContent && (
                <div className="footer-title">HOUGUET Maxime Portfolio</div>
            )}
            {showHeaderContent && (
                <div className="footer-dynamic-content">
                    <div className="footer-left-icon">
                        <HeaderLeft />
                    </div>
                    <div className="footer-header-content">
                        <a href="https://github.com/MaximeH2024" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/maxime-houguet-dev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="mailto:houguetm.pro@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                    <div className="footer-right-icon">
                        <HeaderRight />
                    </div>
                </div>
            )}
        </footer>
    );
}
