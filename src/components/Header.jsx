import { NavLink } from 'react-router-dom';
import '../components/Header.scss';
import LanguageToggle from './LanguageBtn';
import { useTranslation } from 'react-i18next';

function Header() {

    const { t } = useTranslation();

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
                </div>
            </div>
        </>
    )
}

export default Header;