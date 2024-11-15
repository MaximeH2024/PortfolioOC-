import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import './resume-display.scss';

Modal.setAppElement('#root'); // Pour l'accessibilité

export default function ResumeDisplay() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2,
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

    // Fonction pour ouvrir et fermer la modale
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div
            className={`resume-display ${isVisible ? 'animate' : ''}`}
            ref={ref}
        >
            {isVisible && (
                <div className="letter">
                    <p>My Resume!</p>
                    <p>Click Here</p>
                    <img 
                        src="/src/assets/folder.png" 
                        alt="Resume" 
                        onClick={openModal} // Ouvrir la modale au clic
                    />
                </div>
            )}

            {/* Modale pour afficher le PDF */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Resume PDF"
                className="pdf-modal"
                overlayClassName="pdf-modal-overlay"
            >
                <button onClick={closeModal} className="close-button">Close</button>
                <iframe 
                    src="/public/CV_Maxime_Houguet.pdf" 
                    width="100%" 
                    height="100%" 
                    title="CV Maxime HOUGUET"
                    style={{ border: 'none' }}
                />
            </Modal>
        </div>
    );
}
