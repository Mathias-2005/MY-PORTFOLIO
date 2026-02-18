import { useTranslation } from 'react-i18next';
import frFlag from '../assets/images/france.png';
import gbFlag from '../assets/images/anglais.png';
import '../components/LanguageBtn.scss';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const isFrench = i18n.language === 'fr';

  return (
    <>
      <button
        className='languageBtn'
        onClick={toggleLanguage}
        aria-label={isFrench ? 'Switch to English' : 'Passer en français'}>
        <img
          className='languageBtn__logo'
          src={isFrench ? frFlag : gbFlag}
          alt={isFrench ? 'Drapeau français' : 'British flag'}
        />
      </button>
    </>
  );
}