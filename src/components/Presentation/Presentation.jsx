import './presentation.scss';
import PresentationEffect from '../PresentationEffect/PresentationEffect';

export default function Presentation() {
    return (
        <div className="presentation">
            <h2>Presentation</h2>
            <div className='presentation-intro'>Je me présente <strong>Houguet Maxime</strong>, 34 ans, développeur <strong>enthousiaste</strong> en quête de nouveaux défis, je vous invite à en apprendre plus sur moi en parcourant mon <strong>portfolio</strong></div>
            <PresentationEffect />
        </div>
    );
}
