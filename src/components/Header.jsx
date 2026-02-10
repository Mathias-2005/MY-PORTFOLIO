import { NavLink } from "react-router-dom";
import '../components/Header.scss';

function Header() {

    return (
        <>
            <div className="container">
                <div className="container__logo">
                    <img src="../src/assets/images/Mathias.png" alt="Photo de moi :)"/>
                    <h2>Mathias</h2>
                </div>
                <div className="container__links">
                    <NavLink className='container__link'>Accueil</NavLink>
                    <NavLink className='container__link'>Projets</NavLink>
                    <NavLink className='container__link'>Compétences</NavLink>
                    <NavLink className='container__link'>Contact</NavLink>
                </div>
            </div>
            <div className="container__line"></div>
        </>
    )
}

export default Header;