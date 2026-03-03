import '../components/Description.scss';
import { useParams } from "react-router-dom";
import ProjectsData from '../data/ProjectsData.json';
import { useTranslation } from 'react-i18next';

function Description() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    const { id } = useParams(); //ID EN PARAMETTRE URL
    const data = ProjectsData.Projects.find(item => item.id === id); // TROUVE LE BON ID CORRESPONDANT

    return (
        <>
            <div className='description'>
                <h2 className='description__title'>{t('Description.title')}</h2>
                <div className='description__container'>
                    <p className='description__p'>{t(`Projects.${id}.description`)}</p>
                </div>
            </div>
        </>
    )
}

export default Description;