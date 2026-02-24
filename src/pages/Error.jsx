import { Link } from "react-router-dom";
import '../components/Error.scss';
import { useTranslation } from 'react-i18next';

function Error() {

    const { t } = useTranslation();

    return (
        <>
            <div className="error">
                <p className="error__404">404</p>
                <p className="error__p">{t("Error.p")}</p>
                <Link to={"/"} className="error__link">
                    <p className="error__a">{t("Error.a")}</p>
                </Link>
            </div>
        </>
    )
}

export default Error;