import { useState } from 'react';
import './header-right.scss';
import { useLanguage } from '../../context/LanguageContext';
import CustomModal from '../../utils/CustomModal.jsx';

export default function HeaderRight() {
    const { language } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const translations = {
        fr: { education: 'Formation', projects: 'Projets', contact: 'Contact' },
        en: { education: 'Education', projects: 'Projects', contact: 'Contact' }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="header-right">
            <a href="#formation">{translations[language].education}</a>
            <a href="#projects">{translations[language].projects}</a>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); openModal(); }} 
                role="button" 
                aria-controls="contact-modal" 
                aria-expanded={isModalOpen} 
                style={{ cursor: 'pointer' }}
            >
                {translations[language].contact}
            </a>

            <CustomModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                id="contact-modal"
                aria={{
                    hidden: !isModalOpen,
                    labelledby: 'contact-modal-title',
                }}
            >
                <div className="modal-content">
                    <h3 id="contact-modal-title">Contact</h3>
                    <p>
                        GitHub :
                        <a 
                            href="https://github.com/MaximeH2024" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Visitez mon profil GitHub"
                        >
                            MaximeH2024
                        </a>
                    </p>
                    <p>
                        LinkedIn : 
                        <a 
                            href="https://www.linkedin.com/in/maxime-houguet-dev" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Visitez mon profil LinkedIn"
                        >
                            Maxime Houguet
                        </a>
                    </p>
                    <p>
                        Email :
                        <a 
                            href="mailto:houguetm.pro@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Envoyer un email à houguetm.pro@gmail.com"
                        >
                            houguetm.pro@gmail.com
                        </a>
                    </p>
                    <button onClick={closeModal} aria-label="Fermer le modal">Fermer</button>
                </div>
            </CustomModal>
        </div>
    );
}
