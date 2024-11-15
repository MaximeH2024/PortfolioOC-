import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    const translations = {
        fr: {
            title: 'Houguet Maxime - Développeur',
        },
        en: {
            title: 'Houguet Maxime - Developer',
        },
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

// PropTypes pour LanguageProvider
LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
