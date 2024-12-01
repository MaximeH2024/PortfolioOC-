import { useLanguage } from '../../context/LanguageContext';
import './presentation-text-display-mobile.scss'; 
import PresentationData from '../../data/presentation.json';

const PresentationTextDisplayMobile = () => {
    const { language } = useLanguage(); 

    return (
        <div className="presentation-container">
            {PresentationData.map((item) => (
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
