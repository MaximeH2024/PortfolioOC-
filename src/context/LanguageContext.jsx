import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const translations = {
    fr: {
        title: 'HOUGUET Maxime Développeur',
        presentationTitle: 'Présentation',
        presentationText: 'Je me présente <strong>Houguet Maxime</strong>, 34 ans, développeur <strong>enthousiaste</strong> en quête de nouveaux défis, je vous invite à en apprendre plus sur moi en parcourant mon <strong>portfolio</strong>',
    },
    en: {
        title: 'HOUGUET Maxime Developer',
        presentationTitle: 'Presentation',
        presentationText: 'I introduce myself as <strong>Houguet Maxime</strong>, 34 years old, an <strong>enthusiastic</strong> developer looking for new challenges. I invite you to learn more about me by browsing my <strong>portfolio</strong>',
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
