import { useParams } from 'react-router-dom';
import '../components/Stack.scss';
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

    const { id } = useParams();
    const data = ProjectsData.Projects.find(item => item.id === id);

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
                                    alt={tech}
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