import { useEffect, useRef, useState } from 'react';
import './resume-display.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import folderImg from '../../assets/folder.png';
import CustomModal from '../../utils/CustomModal.jsx';

export default function ResumeDisplay() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef(null);
    const { language, translations } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { root: null, threshold: 0.2 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={`resume-display ${isVisible ? 'animate' : ''}`} ref={ref}>
            {isVisible && (
                <div className="letter">
                    <p>{translations[language]?.resumeTitle || 'Loading...'}</p>
                    <p>{translations[language]?.resumeCTA || 'Loading...'}</p>
                    <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
                    <img src={folderImg} alt="Resume" onClick={openModal} />
                </div>
            )}

            <CustomModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="pdf-modal"
                overlayClassName="pdf-modal-overlay"
            >
                <button onClick={closeModal} className="close-button">Close</button>
                <iframe 
                    src="/CV_Maxime_Houguet.pdf" 
                    width="100%" 
                    height="100%" 
                    title="CV Maxime HOUGUET"
                    style={{ border: 'none' }}
                />
            </CustomModal>
        </div>
    );
}