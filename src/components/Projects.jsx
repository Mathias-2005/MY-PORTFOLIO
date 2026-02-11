import '../components/Projects.scss';
import ProjectsData from '../data/ProjectsData.json';

const projects = ProjectsData.Projects; // ON RECUPERE LES DATAS DE NOS PROJETS

function Projects() {

    return (

        <>
            <div className='projects' id='projects'>
                <h2 className='projects__title'>Projets Réalisés</h2>
                <div className='projects__cards'>
                    {projects.map((e) => (
                        <div key={e.id} className='projects__card'>
                            <img src={e.image} alt="Photo de mes projets" />
                            <div className='projects__overlay'>
                                <p className='projects__name'>{e.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;