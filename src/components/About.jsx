import '../components/About.scss'

function About() {

    return (
        <>
            <div className='about'>
                <div className='about__info'>
                    <h3 className='about__h3'>Développeur Web Junior</h3>
                    <h1 className='about__title'>Mathias Mailly de pinho</h1>
                    <p className='about__p'>Diplômé BAC+2 en développement web, spécialisé dans la stack MERN. <br /> Passionné par la création d'applications web modernes, performantes et intuitives.</p>
                </div>
                <div className='about__img'>
                    <img src="../src/assets/images/Mathias.png" alt="Photo de moi :)" />
                </div>
            </div>
        </>
    )
}

export default About;