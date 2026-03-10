import '../components/Skills.scss';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

function Skills() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    // VARIABLE QUI CONTIENT FRONT
    const techsfront = {
        "HTML": {
            image: "/images/html-css.webp",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        "JAVASCRIPT": {
            image: "/images/javascript.webp",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        "REACT": {
            image: "/images/react.webp",
            url: "https://react.dev"
        },
        "SCSS/SASS": {
            image: "/images/sass.webp",
            url: "https://sass-lang.com"
        }
    }

    // VARIABLE QUI CONTIENT BACK
    const techsback = {
        "NODEJS": {
            image: "/images/nodejs.webp",
            url: "https://nodejs.org"
        },
        "API": {
            image: "/images/api.webp",
            url: "https://restfulapi.net"
        },
        "MONGODB": {
            image: "/images/mongodb.webp",
            url: "https://www.mongodb.com"
        }
    }

    // VARIABLE QUI CONTIENT TOOLS
    const techstools = {
        "GIT": {
            image: "/images/git.webp",
            url: "https://git-scm.com"
        },
        "GITHUB": {
            image: "/images/github.webp",
            url: "https://github.com"
        },
        "VSCODE": {
            image: "/images/vscode.webp",
            url: "https://code.visualstudio.com"
        }
    }

    return (
        <>
            <div className='skills' id='skills'>
                <AnimatedSection>
                    <h2 className='skills__title'>{t('Skills.title')}</h2>
                    <div className='skills__front-back'>
                        <div className='skills__front-back-container'>
                            <h3 className='skills__title-tech'>{t('Skills.frontend')}</h3>
                            <div className='skills__techs'>
                                {Object.entries(techsfront).map(([name, data]) => (
                                    <div key={name} className='skills__container'>
                                        <a href={data.url} target='_blank' rel='noopener noreferrer'>
                                            <img
                                                src={data.image}
                                                alt={`Logo de ${name}`}
                                                title={name}
                                                className='skills__logo'
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='skills__front-back-container'>
                            <h3 className='skills__title-tech'>{t('Skills.backend')}</h3>
                            <div className='skills__techs'>
                                {Object.entries(techsback).map(([name, data]) => (
                                    <div key={name} className='skills__container'>
                                        <a href={data.url} target='_blank' rel='noopener noreferrer'>
                                            <img
                                                src={data.image}
                                                alt={`Logo de ${name}`}
                                                title={name}
                                                className='skills__logo'
                                            />
                                        </a>
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
                            {Object.entries(techstools).map(([name, data]) => (
                                <div key={name} className='skills__container'>
                                    <a href={data.url} target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={data.image}
                                            alt={`Logo de ${name}`}
                                            title={name}
                                            className='skills__logo'
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </>
    )
}

export default Skills;