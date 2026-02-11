import '../components/Footer.scss';

function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footer__droit'>
                    <p>© 2026 Mailly de pinho Mathias. Tous droits réservés.</p>
                </div>
                <div className='footer__links'>
                    <a className='footer__link' href="https://github.com/Mathias-2005">GitHub</a>
                    <a className='footer__link' href="#">LinkedIn</a>
                    <a className='footer__link' href="mailto:mathiasmaillydepinho@gmail.com">Email</a>
                </div>
            </div>
        </>
    )
}

export default Footer;