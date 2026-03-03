import { Outlet } from 'react-router-dom';
import '../layout/App.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {

    return (
        <div className='app-container'>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet /> {/* RENVOIE LA PAGE CORRESPONDANT */}
                </main>
                <footer>
                    <Footer />
                </footer>
        </div>
    )

}

export default App;
