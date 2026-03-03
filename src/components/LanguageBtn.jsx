import { useTranslation } from 'react-i18next';
import frFlag from '../assets/images/france.webp';
import gbFlag from '../assets/images/anglais.webp';
import '../components/LanguageBtn.scss';

// AVEC LE PACKAGE I18N TRADUCTION 

export default function LanguageToggle() {
  
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr'; // SI FR EST OFF ALORS EN SINON FR 
    i18n.changeLanguage(newLang);
  };

  const isFrench = i18n.language === 'fr'; // PAR DEFAUT EN FR

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