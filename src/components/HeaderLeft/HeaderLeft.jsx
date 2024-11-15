import './header-left.scss';
import { useLanguage } from '../../context/LanguageContext';

export default function HeaderLeft() {
    const { language } = useLanguage();

    const translations = {
        fr: { presentation: 'Présentation', cv: 'CV', skills: 'Compétences' },
        en: { presentation: 'Presentation', cv: 'Resume', skills: 'Skills' }
    };

    return (
        <div className="header-left">
            <a href='#'>{translations[language].presentation}</a>
            <a href='#'>{translations[language].cv}</a>
            <a href='#'>{translations[language].skills}</a>
        </div>
    );
}
