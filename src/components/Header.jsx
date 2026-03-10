import { NavLink, useLocation, useParams } from 'react-router-dom';
import '../components/Header.scss';
import LanguageToggle from './LanguageBtn';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

function Header() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE
    const location = useLocation(); // USELOCATION POUR OFF/ON COMPOSANT HEADER

    const { id } = useParams(); // ID EN PARAMETTRE URL


    const [theme, setTheme] = useState("light"); // PAR DEFAUT THEME MODE LIGHT

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="container">
                <div className="container__logo">
                    <NavLink to="/">
                        <img
                            src="/images/Mathias.webp"
                            alt="Photo de moi :)"
                            className='container__logo-mathias' />
                    </NavLink>
                    <h2 className='container__title'>{t('Header.title')}</h2>
                    
                </div>
                <div className="container__links">
                    {/* SI URL PROJECT/:ID ALORS OFF */}
                    {location.pathname !== `/project/${id}` && (
                        <div className='container__link-a'>
                            <a href='#about' className='container__link'>{t('Header.home')}</a>
                            <a href="#projects" className='container__link'>{t('Header.projects')}</a>
                            <a href='#skills' className='container__link'>{t('Header.skills')}</a>
                            <a href='#contact' className='container__link'>{t('Header.contact')}</a>
                        </div>
                    )}
                    <LanguageToggle />
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </>
    )
}

export default Header;