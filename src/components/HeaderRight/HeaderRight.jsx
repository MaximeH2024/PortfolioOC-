import { useState } from 'react';
import './header-right.scss';
import Modal from 'react-modal';
import { useLanguage } from '../../context/LanguageContext';

Modal.setAppElement('#root'); // Pour éviter les avertissements de react-modal

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
            <a onClick={openModal} style={{ cursor: 'pointer' }}>
                {translations[language].contact}
            </a>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal-content">
                    <h2>Contact</h2>
                    <p>Houguet Maxime, 34 ans</p>
                    <p>
                        GitHub :
                        <a href="https://github.com/MaximeH2024" target="_blank" rel="noopener noreferrer">
                             MaximeH2024
                        </a>
                    </p>
                    <p>
                        LinkedIn : 
                        <a href="https://www.linkedin.com/in/maxime-houguet-dev" target="_blank" rel="noopener noreferrer">
                             Maxime Houguet
                        </a>
                    </p>
                    <p>Email :<a href="mailto:houguetm.pro@gmail.com">houguetm.pro@gmail.com</a></p>
                    <button onClick={closeModal}>Fermer</button>
                </div>
            </Modal>
        </div>
    );
}
