import { Link } from 'react-router-dom';
import '../components/Cards.scss';
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

const projects = ProjectsData.Projects; // ON RECUPERE LES DATAS DES PROJETS

function Cards() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    return (

        <>
            <div className='projects' id='projects'>
                <AnimatedSection>
                    <h2 className='projects__title'>{t('Cards.title')}</h2>
                    <div className='projects__cards'>
                        {projects.map((e) => (
                            <Link to={`/project/${e.id}`}
                                key={e.id}
                                className='projects__card'>
                                <img
                                    src={e.picture}
                                    alt={`Photo de mon projets ${e.title}`}
                                    title={e.title} />
                                <div className='projects__overlay'>
                                    <p className='projects__name'>{e.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </>
    )
}

export default Cards;