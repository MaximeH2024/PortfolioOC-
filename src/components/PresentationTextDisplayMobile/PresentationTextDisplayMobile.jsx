import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './presentation-text-display-mobile.scss'; 

const PresentationTextDisplayMobile = () => {
    const [presentationData, setPresentationData] = useState([]);
    const { language } = useLanguage(); // Utilise le contexte de langue

    useEffect(() => {
        // Charger les données du fichier JSON
        const fetchData = async () => {
            try {
                const response = await import('../../data/presentation.json'); // Chemin correct au JSON
                setPresentationData(response.default || response);
            } catch (error) {
                console.error('Erreur lors du chargement des données de présentation :', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="presentation-container">
            {presentationData.map((item) => (
                <div
                    key={item.id}
                    className="presentation-item"
                    style={{ backgroundColor: item.color }}
                >
                    <p dangerouslySetInnerHTML={{ __html: language === 'fr' ? item.text_fr : item.text_en }} />
                </div>
            ))}
        </div>
    );
};

export default PresentationTextDisplayMobile;
