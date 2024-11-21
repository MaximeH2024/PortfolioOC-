import DynamicSquare from '../dynamicSquare/dynamicSquare';
import './header-main.scss';
import { useLanguage } from '../../context/LanguageContext';
import HeaderLeft from '../headerLeft/headerLeft';
import HeaderRight from '../headerRight/headerRight';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </div>
                    <img
                        src='../src/assets/french_flag.png'
                        alt='French Flag'
                        onClick={() => toggleLanguage('fr')}
                    />
                    <img
                        src='../src/assets/english_flag.png'
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