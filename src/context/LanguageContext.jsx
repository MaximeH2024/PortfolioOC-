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
        formationText: 'Pendant 6 mois, j\'ai suivi une formation à temps plein en développement web avec OpenClassrooms, une plateforme reconnue pour ses parcours axés sur la pratique. Ce programme certifié (Diplôme de niveau 5, Bac +2) m\'a permis de développer des compétences solides en travaillant sur des projets concrets, directement inspirés de situations professionnelles. Vous pouvez découvrir les projets que j\'ai réalisés dans la suite de mon portfolio !',
        resumeTitle: 'Mon CV!',
        resumeCTA: 'Cliquez ici',
    },
    en: {
        title: 'HOUGUET Maxime Developer',
        presentationTitle: 'Presentation',
        presentationText: 'I introduce myself as <strong>Houguet Maxime</strong>, 34 years old, an <strong>enthusiastic</strong> developer looking for new challenges. I invite you to learn more about me by browsing my <strong>portfolio</strong>',
        hoverInstruction: 'You can hover over the circles to learn more',
        formationTitle: 'Web Development Training',
        formationText: 'Over six months, I completed a full-time web development program with OpenClassrooms, a platform recognized for its hands-on and practice-oriented learning paths. This certified program (Level 5 Diploma, equivalent to Bac+2) allowed me to build strong skills by working on concrete projects inspired by real-world scenarios. You can explore the projects I\'ve worked on in the rest of my portfolio!',
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
