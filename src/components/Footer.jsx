import '../components/Footer.scss';

function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footer__droit'>
                    <p>© 2026 Mailly de pinho Mathias. Tous droits réservés.</p>
                </div>
                <div className='footer__links'>
                    <a className='footer__link' href="https://github.com/Mathias-2005" target='_blank'>GitHub</a>
                    <a className='footer__link' href="#" target='_blank'>LinkedIn</a>
                    <a className='footer__link' href="mailto:mathiasmaillydepinho@gmail.com" target='_blank'>Email</a>
                </div>
            </div>
        </>
    )
}

export default Footer;