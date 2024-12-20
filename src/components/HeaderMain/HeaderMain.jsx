import DynamicSquare from '../dynamicSquare/dynamicSquare.jsx';
import './header-main.scss';
import { useLanguage } from '../../context/LanguageContext';
import HeaderLeft from '../HeaderLeft/HeaderLeft.jsx';
import HeaderRight from '../HeaderRight/HeaderRight.jsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import frenchFlag from '../../assets/french_flag.png';
import englishFlag from '../../assets/english_flag.png';
export default function HeaderMain({ isMobile }) {
    const { toggleLanguage, translations, language } = useLanguage();

    return (
        <div className='header-main'>
            {!isMobile && (
                <div className='header-main-animation'>
                    <DynamicSquare />
                </div>
            )}
            
            <div className='header-main-title'>
                <h1><strong>{translations[language].title}</strong></h1>
                <div className='header-main-icon'>
                    <div className='header-main-link'>
                            <a 
                                href="https://github.com/MaximeH2024" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Visitez mon profil GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/maxime-houguet-dev" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Visitez mon profil LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            </a>
                            <a 
                                href="mailto:houguetm.pro@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Envoyer un email à houguetm.pro@gmail.com"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size='2x' />
                            </a>
                        </div>
                        <img
                            src={frenchFlag}
                            alt='French Flag'
                            onClick={() => toggleLanguage('fr')}
                        />
                        <img
                            src={englishFlag}
                            alt='English Flag'
                            onClick={() => toggleLanguage('en')}
                        />
                    </div>
            </div>
            {isMobile && (
                <div className="header-extra">
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            )}
        </div>
    );
}

HeaderMain.propTypes = {
    isMobile: PropTypes.bool.isRequired,
}