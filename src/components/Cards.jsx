import { Link } from 'react-router-dom';
import '../components/Projects.scss';
import ProjectsData from '../data/ProjectsData.json';

const projects = ProjectsData.Projects; // ON RECUPERE LES DATAS DE NOS PROJETS

function Cards() {

    return (

        <>
            <div className='projects' id='projects'>
                <h2 className='projects__title'>Projets Réalisés</h2>
                <div className='projects__cards'>
                    {projects.map((e) => (
                        <Link to={`/project/${e.id}`} key={e.id} className='projects__card'>
                            <img src={e.picture} alt="Photo de mes projets" />
                            <div className='projects__overlay'>
                                <p className='projects__name'>{e.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards;