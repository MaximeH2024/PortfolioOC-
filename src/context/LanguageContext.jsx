import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const translations = {
    fr: {
        title: 'Houguet Maxime - Développeur',
    },
    en: {
        title: 'Houguet Maxime - Developer',
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
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

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
