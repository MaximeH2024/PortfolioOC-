import DynamicSquare from '../dynamicSquare/dynamicSquare';
import './header-main.scss';
import { useLanguage } from '../../context/LanguageContext';
import HeaderLeft from '../headerLeft/headerLeft';
import HeaderRight from '../headerRight/headerRight';
import PropTypes from 'prop-types';

export default function HeaderMain({ isMobile }) {
    const { toggleLanguage, translations, language } = useLanguage();

    return (
        <div className='header-main'>
            {/* Afficher DynamicSquare uniquement si ce n'est pas en mode mobile */}
            {!isMobile && (
                <div className='header-main-animation'>
                    <DynamicSquare />
                </div>
            )}
            
            <div className='header-main-title'>
                <h1>{translations[language].title}</h1>
                <div className='header-main-flag'>
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

            {/* Afficher HeaderLeft et HeaderRight uniquement en mode mobile */}
            {isMobile && (
                <div className="header-extra">
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            )}
        </div>
    );
}

HeaderMain.PropTypes = {
    isMobile: PropTypes.bool.isRequired,
}