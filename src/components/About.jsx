import '../components/About.scss'

function About() {

    return (
        <>
            <div className='about'>
                <div className='about__info'>
                    <h3 className='about__h3'>Développeur Web Junior</h3>
                    <h1 className='about__title'>Mathias Mailly de pinho</h1>
                    <p className='about__p'>Diplômé BAC+2 en développement web, spécialisé dans la stack MERN.
                        <br /> Passionné par la création d'applications web modernes, performantes et intuitives.</p>
                    <div className='about__btn'>
                        <a
                            href="/cv.pdf"
                            download="cv.pdf"
                            className='about__btn-cv'
                        >
                            <button className='about__btn-cv'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download w-5 h-5">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                <p>Télécharger CV</p>
                            </button>
                        </a>
                        <a
                            href="https://github.com/Mathias-2005"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='about__btn-github'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="mailto:mathiasmaillydepinho@gmail.com">
                            <button className='about__btn-email'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='about__img'>
                    <img src="../src/assets/images/Mathias.png" alt="Photo de moi :)" />
                </div>
            </div>
        </>
    )
}

export default About;