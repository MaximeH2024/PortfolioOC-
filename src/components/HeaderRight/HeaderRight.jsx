import './header-right.scss';
import { useLanguage } from '../../context/LanguageContext';

export default function HeaderRight() {
    const { language } = useLanguage();

    const translations = {
        fr: { education: 'Formation', projects: 'Projets', contact: 'Contact' },
        en: { education: 'Education', projects: 'Projects', contact: 'Contact' }
    };

    return (
        <div className="header-right">
            <a href='#'>{translations[language].education}</a>
            <a href='#'>{translations[language].projects}</a>
            <a href='#'>{translations[language].contact}</a>
        </div>
    );
}
