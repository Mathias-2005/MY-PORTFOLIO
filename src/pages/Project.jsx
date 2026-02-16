import { useParams } from "react-router-dom";
import Error from '../pages/Error';
import ProjectData from '../data/ProjectsData.json';
import PreviewLink from "../components/PreviewLink";

function Project() {
    
    const { id } = useParams();
    const projects = ProjectData.Projects.find(item => item.id === id)

    if (!projects) {
        return (
            <>
                <Error />
            </>
        )
    }

    return (
        <>
            <PreviewLink />
        </>
    )
}

export default Project;