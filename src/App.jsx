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
            <div className="app">
                <Header />
                <div className="grid-background">
                    <section id="presentation">
                        <Presentation />
                    </section>
                    <section id="resume">
                        <ResumeDisplay />
                    </section>
                    <section id='skills'>
                    <SkillsDisplay />
                    </section>
                </div>
                <div className="img-background">
                    <section id="formation">
                        <FormationDisplay />
                    </section>
                    <section id="projects">
                        <ProjectDisplay />
                    </section>
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
