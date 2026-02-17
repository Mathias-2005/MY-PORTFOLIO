import '../components/PreviewLink.scss';
import { useParams } from 'react-router-dom';
import ProjectsData from '../data/ProjectsData.json';

function PreviewLink() {

    const { id } = useParams();
    const data = ProjectsData.Projects.find(item => item.id === id);

    return (
        <>
            <div className='preview'>
                <h2 className='preview__title'>{data.title}</h2>
                <div className='preview__img'>
                    <a href={data.demo} target='_blank'>
                        <img src={data.picture} alt="Image de mon projet" />
                    </a>
                </div>
                <h2 className='preview__title'>Liens</h2>
                <div className='preview__links'>
                    <a className='preview__link' target='_blank' href={data.github}>
                        <button className='preview__link-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github w-5 h-5">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            Repository
                        </button>
                    </a>
                    <a className='preview__link' target='_blank' href={data.demo}>
                        <button className='preview__link-btn'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            Site Web
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default PreviewLink;