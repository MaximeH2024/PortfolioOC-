import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const translations = {
    fr: {
        title: 'HOUGUET Maxime Développeur',
        presentationTitle: 'Présentation',
        presentationText: 'Je me présente <strong>Houguet Maxime</strong>, 34 ans, développeur <strong>enthousiaste</strong> en quête de nouveaux défis, je vous invite à en apprendre plus sur moi en parcourant mon <strong>portfolio</strong>',
        hoverInstruction: 'Vous pouvez survolez les ronds pour en apprendre plus',
        formationTitle: 'Formation en Développement Web',
        formationText: 'J&apos;ai suivi une formation intensive de 6 mois à temps plein sur le développement web, proposée par OpenClassrooms, une plateforme reconnue pour ses parcours professionnels orientés vers l&apos;emploi. Ce programme certifié (Diplôme de niveau 5, Bac +2) m&apos;a permis d&apos;acquérir des compétences techniques et pratiques en développement web, en travaillant sur des projets concrets basés sur des mises en situation professionnelles.',
        resumeTitle: 'Mon CV!',
        resumeCTA: 'Cliquez ici',
    },
    en: {
        title: 'HOUGUET Maxime Developer',
        presentationTitle: 'Presentation',
        presentationText: 'I introduce myself as <strong>Houguet Maxime</strong>, 34 years old, an <strong>enthusiastic</strong> developer looking for new challenges. I invite you to learn more about me by browsing my <strong>portfolio</strong>',
        hoverInstruction: 'You can hover over the circles to learn more',
        formationTitle: 'Web Development Training',
        formationText: 'I completed an intensive 6-month full-time web development training program offered by OpenClassrooms, a platform recognized for its career-focused, job-oriented curricula. This certified program (Level 5 Diploma, Bac +2 equivalent) allowed me to acquire technical and practical skills in web development by working on real-world projects based on professional scenarios.',
        resumeTitle: 'My Resume!',
        resumeCTA: 'Click Here',
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
