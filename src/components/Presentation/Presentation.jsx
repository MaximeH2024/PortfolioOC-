import './presentation.scss';
import PresentationEffect from '../PresentationEffect/PresentationEffect';
import { useLanguage } from '../../context/LanguageContext';

export default function Presentation() {
    const { language, translations } = useLanguage();

    return (
        <div className="presentation">
            <h2>{translations[language].presentationTitle}</h2>
            <div
                className="presentation-intro"
                dangerouslySetInnerHTML={{ __html: translations[language].presentationText }}
            />
            <div className='main-part-presentation'>
                <PresentationEffect />
            </div>
        </div>
    );
}
