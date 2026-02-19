import { useParams } from 'react-router-dom';
import '../components/Stack.scss';
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';

const techLogos = {
    "HTML": "../src/assets/images/html-css.webp",
    "JAVASCRIPT": "../src/assets/images/javascript.webp",
    "REACT": "../src/assets/images/react.webp",
    "SCSS/SASS": "../src/assets/images/sass.webp",
    "NODEJS": "../src/assets/images/nodejs.webp",
    "API": "../src/assets/images/api.webp",
    "MONGODB": "../src/assets/images/mongodb.webp"
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