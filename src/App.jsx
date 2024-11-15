import '../src/styles/styles.scss';
import Header from './components/Header/Header';
import Presentation from '../src/components/Presentation/Presentation';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <div className='app'>
                <Header />
                <Presentation />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
