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
            <div className='presentation-indication'>
                <p>Vous pouvez survolez les ronds pour en apprendre plus</p>
                <span className='presentation-indication-1'> </span>
                <span className='presentation-indication-2'> </span>
                <span className='presentation-indication-3'> </span>
            </div>
            <div className='main-part-presentation'>
                <PresentationEffect />
            </div>
        </div>
    );
}