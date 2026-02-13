import '../components/Header.scss';


function Header() {

    return (
        <>
            <div className="container">
                <div className="container__logo">
                    <img src="../src/assets/images/Mathias.png" alt="Photo de moi :)"/>
                    <h2 className='container__title'>Mathias</h2>
                </div>
                <div className="container__links">
                    <a href="#about" className='container__link'>Accueil</a>
                    <a href="#projects" className='container__link'>Projets</a>
                    <a href='#skills' className='container__link'>Compétences</a>
                    <a href='#contact' className='container__link'>Contact</a>
                </div>
            </div>
            <div className="container__line"></div>
        </>
    )
}

export default Header;