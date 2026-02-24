import { NavLink } from 'react-router-dom';
import '../components/Header.scss';
import LanguageToggle from './LanguageBtn';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

function Header() {

    const { t } = useTranslation();

    const [theme, setTheme] = useState("light");
    
        useEffect(() => {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }, []);
    
            useEffect(() => {
        // Applique la classe au body ou html
        document.documentElement.setAttribute("data-theme", theme);
        // ou document.body.classList.remove("light", "dark");
        // document.body.classList.add(theme);
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
                    <img src="/images/Mathias.webp" alt="Photo de moi :)" className='container__logo-mathias'/>
                    <h2 className='container__title'>{t('Header.title')}</h2>
                </div>
                <div className="container__links">
                    <NavLink to="/" className='container__link'>{t('Header.home')}</NavLink>
                    <a href="#projects" className='container__link'>{t('Header.projects')}</a>
                    <a href='#skills' className='container__link'>{t('Header.skills')}</a>
                    <a href='#contact' className='container__link'>{t('Header.contact')}</a>
                    <LanguageToggle />
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </>
    )
}

export default Header;