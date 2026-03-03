import '../components/Skills.scss';
import { useTranslation } from 'react-i18next';
import ProjectsData from '../data/ProjectsData.json';

function Skills() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    const data = ProjectsData.Stack[0]; // VARIABLE DATA STACK SOUS FORME DE TABLEAU

    // VARIABLE QUI CONTIENT FRONT
    const techsfront = {
        "HTML": "/images/html-css.webp",
        "JAVASCRIPT": "/images/javascript.webp",
        "REACT": "/images/react.webp",
        "SCSS/SASS": "/images/sass.webp",
    }

    // VARIABLE QUI CONTIENT BACK
    const techsback = {
        "NODEJS": "/images/nodejs.webp",
        "API": "/images/api.webp",
        "MONGODB": "/images/mongodb.webp"
    }

    // VARIABLE QUI CONTIENT TOOLS
    const techstools = {
        "GIT": "/images/git.webp",
        "GITHUB": "/images/github.webp",
        "VSCODE": "/images/vscode.webp"
    }

    return (
        <>
            <div className='skills' id='skills'>
                <h2 className='skills__title'>{t('Skills.title')}</h2>
                <div className='skills__front-back'>
                    <div className='skills__front-back-container'>
                        <h3 className='skills__title-tech'>{t('Skills.frontend')}</h3>
                        <div className='skills__techs'>
                            {data.frontend.map((tech) => (
                                <div key={tech} className='skills__container'>
                                    {techsfront[tech] ? (
                                        <img
                                            src={techsfront[tech]}
                                            alt={`Logo de ${tech}`}
                                            title={tech}
                                            className='skills__logo'
                                        />
                                    ) : (
                                        <span>{tech}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='skills__front-back-container'>
                        <h3 className='skills__title-tech'>{t('Skills.backend')}</h3>
                        <div className='skills__techs'>
                            {data.backend.map((tech) => (
                                <div key={tech} className='skills__container'>
                                    {techsback[tech] ? (
                                        <img
                                            src={techsback[tech]}
                                            alt={`Logo de ${tech}`}
                                            title={tech}
                                            className='skills__logo'
                                        />
                                    ) : (
                                        <span>{tech}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='skills__title-tools'>
                    <h3>{t('Skills.tool')}</h3>
                </div>
                <div className='skills__tools'>
                    <div className='skills__tool'>
                        {data.tools.map((tech) => (
                            <div key={tech} className='skills__container'>
                                {techstools[tech] ? (
                                    <img
                                        src={techstools[tech]}
                                        alt={`Logo de ${tech}`}
                                        title={tech}
                                        className='skills__logo'
                                    />
                                ) : (
                                    <span>{tech}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;