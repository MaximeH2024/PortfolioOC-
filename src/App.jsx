import '../src/styles/styles.scss';
import Header from './components/Header/Header';
import Presentation from '../src/components/Presentation/Presentation';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './context/LanguageContext';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay';
import ResumeDisplay from './components/ResumeDisplay/ResumeDisplay';
import SkillsDisplay from './components/SkillsDisplay/SkillsDisplay';
import FormationDisplay from './components/FormationDisplay/FormationDisplay';

function App() {
    return (
        <LanguageProvider>
            <div className='app'>
                <Header />
                <Presentation />
                <div className='grid-background'>
                    <div className="resume-container">
                        <ResumeDisplay />
                    </div>
                    <SkillsDisplay />
                </div>
                <FormationDisplay />
                <ProjectDisplay />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
