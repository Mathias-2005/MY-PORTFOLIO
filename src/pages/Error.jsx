import { Link } from "react-router-dom";
import '../components/Error.scss';

function Error() {

    return (
        <>
            <div className="error">
                <p className="error__404">404</p>
                <p className="error__p">Oups! La page que vous demandez n'existe pas.</p>
                <Link to={"/"}>
                    <p className="error__a">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </>
    )
}

export default Error;