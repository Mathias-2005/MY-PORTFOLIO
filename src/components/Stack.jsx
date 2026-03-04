import { useParams } from 'react-router-dom';
import '../components/Stack.scss';
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';

// VARIABLE QUI CONTIENT LES TECHS AVEC IMG
const techLogos = {
    "HTML": {
        image: "/images/html-css.webp",
        url: "https://developer.mozilla.org/fr/docs/Web/HTML"
    },
    "JAVASCRIPT": {
        image: "/images/javascript.webp",
        url: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
    },
    "REACT": {
        image: "/images/react.webp",
        url: "https://react.dev/"
    },
    "SCSS/SASS": {
        image: "/images/sass.webp",
        url: "https://sass-lang.com/"
    },
    "NODEJS": {
        image: "/images/nodejs.webp",
        url: "https://nodejs.org/"
    },
    "API": {
        image: "/images/api.webp",
        url: "https://restfulapi.net/"
    },
    "MONGODB": {
        image: "/images/mongodb.webp",
        url: "https://www.mongodb.com/"
    }
}

function Stack() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    const { id } = useParams(); //ID EN PARAMETTRE URL
    const data = ProjectsData.Projects.find(item => item.id === id); // TROUVE LE BON ID CORRESPONDANT

    return (
        <>
            <div className="stack">
                <h2 className="stack__title">{t('Stack.title')}</h2>
                <div className='stack__container'>
                    {data.technologies.map((tech) => (
                        <div key={tech} className='stack__techs'>
                            <a href={techLogos[tech].url} target='_blank' rel='noopener noreferrer'>
                                <img
                                    src={techLogos[tech].image}
                                    alt={`Logo de ${tech}`}
                                    title={tech}
                                    className='stack__logo'
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Stack;