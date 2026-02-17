import '../components/Description.scss';
import { useParams } from "react-router-dom";
import ProjectsData from '../data/ProjectsData.json';

function Description() {

    const { id } = useParams();
    const data = ProjectsData.Projects.find(item => item.id === id);

    return (
        <>
            <div className='description'>
                <h2 className='description__title'>Description</h2>
                <div className='description__container'>
                    <p className='description__p'>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default Description;