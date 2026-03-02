import '../components/About.scss'
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();

    return (
        <>
            <div className='about' id='about'>
                <div className='about__info'>
                    <h3 className='about__h3'>{t('About.title-h3')}</h3>
                    <h1 className='about__title'>{t('About.title')}</h1>
                    <p className='about__p'>{t('About.description')}</p>
                    <div className='about__btn-1'>
                        <button
                            className='about__btn-cv'
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/cv.pdf';
                                link.download = 'cv.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            aria-label="Télécharger mon CV"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-5 h-5">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                            </svg>
                            <p>{t('About.cv')}</p>
                        </button>
                        <div className='about__btn-2'>
                            <button
                                className='about__btn-link'
                                onClick={() => window.open("https://github.com/Mathias-2005", "_blank")}
                                aria-label="Visiter mon profil GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </button>
                            <button
                                className='about__btn-link'
                                onClick={() => window.open("https://www.linkedin.com/in/mathias-mailly-de-pinho-4b7b303b0/", "_blank")}
                                aria-label="Visiter mon profil LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="24"
                                    height="15"
                                    aria-label="LinkedIn logo"
                                >
                                    <circle cx="64" cy="64" r="48" fill="currentColor" />
                                    <rect x="16" y="128" width="96" height="320" fill="currentColor"/>
                                    <path
                                        d="M160 128h96v48c22-36 62-56 112-56
                                        88 0 144 56 144 160v168h-96V304
                                        c0-48-16-80-56-80s-64 32-64 80v144h-96V128z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button
                                className='about__btn-link'
                                onClick={() => window.location.href = "mailto:mathiasmaillydepinho@gmail.com"}
                                aria-label="Envoyer un email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mathias.webp" className='about__img' alt="Photo de moi :)" fetchPriority="high" loading="eager" />
                </div>
            </div>
        </>
    )
}

export default About;