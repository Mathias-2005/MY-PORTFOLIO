import { useParams } from 'react-router-dom';
import '../components/Stack.scss';
import ProjectsData from '../data/ProjectsData.json';

const techLogos = {
    "HTML": "../src/assets/images/html-css.png",
    "JAVASCRIPT": "../src/assets/images/javascript.webp",
    "REACT": "../src/assets/images/react.png",
    "SCSS/SASS": "../src/assets/images/sass.png",
    "NODEJS": "../src/assets/images/nodejs.png",
    "API": "../src/assets/images/api.png",
    "MONGODB": "../src/assets/images/mongodb.png"
}

function Stack() {

    const { id } = useParams();
    const data = ProjectsData.Projects.find(item => item.id === id);

    return (
        <>
            <div className="stack">
                <h2 className="stack__title">Technologies utilisée</h2>
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