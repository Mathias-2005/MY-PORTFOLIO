import { useParams } from 'react-router-dom';
import '../components/Stack.scss';
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';

// VARIABLE QUI CONTIENT LES TECHS AVEC IMG
const techLogos = {
    "HTML": "/images/html-css.webp",
    "JAVASCRIPT": "/images/javascript.webp",
    "REACT": "/images/react.webp",
    "SCSS/SASS": "/images/sass.webp",
    "NODEJS": "/images/nodejs.webp",
    "API": "/images/api.webp",
    "MONGODB": "/images/mongodb.webp"
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
                            {techLogos[tech] ? (
                                <img
                                    src={techLogos[tech]}
                                    alt={`Logo de ${tech}`}
                                    title={tech}
                                    className='stack__logo'
                                />
                            ) : (
                                <span>{tech}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Stack;