import '../components/Footer.scss';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div className='footer'>
                <div className='footer__droit'>
                    <p>{t('Footer.copyright')}</p>
                </div>
                <div className='footer__links'>
                    <a className='footer__link' href="https://github.com/Mathias-2005" target='_blank'>{t('Footer.github')}</a>
                    <a className='footer__link' href="https://www.linkedin.com/in/mathias-mailly-de-pinho-4b7b303b0/" target='_blank'>{t('Footer.linkedin')}</a>
                    <a className='footer__link' href="mailto:mathiasmaillydepinho@gmail.com" target='_blank'>{t('Footer.email')}</a>
                </div>
            </div>
        </>
    )
}

export default Footer;