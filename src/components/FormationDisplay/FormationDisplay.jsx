import "./formation-display.scss";
import { useLanguage } from '../../context/LanguageContext';

const FormationDisplay = () => {
    const { language, translations } = useLanguage();

    return (
        <div className="formation-display">
            <h2 className="formation-display__title">
                {translations[language].formationTitle}
            </h2>
            <p className="formation-display__text">
                {translations[language].formationText}
            </p>
        </div>
    );
};

export default FormationDisplay;