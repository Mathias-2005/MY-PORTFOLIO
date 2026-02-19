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
                        <a
                            href="/cv.pdf"
                            download="cv.pdf"
                            className='about__btn-cv'
                        >
                            <button className='about__btn-cv'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-5 h-5">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                <p>{t('About.cv')}</p>
                            </button>
                        </a>
                        <div className='about__btn-2'>
                            <a
                                href="https://github.com/Mathias-2005"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='about__btn-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathias-mailly-de-pinho-4b7b303b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='about__btn-link'>
                                    <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </a>
                            <a href="mailto:mathiasmaillydepinho@gmail.com">
                                <button className='about__btn-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='about__img'>
                    <img src="../src/assets/images/Mathias.webp" alt="Photo de moi :)" />
                </div>
            </div>
        </>
    )
}

export default About;