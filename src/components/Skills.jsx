import '../components/Skills.scss';

function Skills() {


    return (
        <>
            <div className='skills' id='skills'>
                <h2 className='skills__title'>Compétences Téchniques et Outils</h2>
                <div className='skills__title-techs'>
                    <div className='skills__title-tech'>
                        <h4>Frontend</h4>
                    </div>
                    <div className='skills__title-tech'>
                        <h4>Backend</h4>
                    </div>
                </div>
                <div className='skills__front-back'>
                    <div className='skills__techs'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/html-css.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/sass.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/javascript.webp" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/react.png" alt="logo html et css" />
                        </div>
                    </div>
                    <div className='skills__techs'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/nodejs.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/mongodb.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/api.png" alt="logo html et css" />
                        </div>
                    </div>
                </div>
                <div className='skills__title-tools'>
                    <h4>Outils</h4>
                </div>
                <div className='skills__tools'>
                    <div className='skills__tool'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/git.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/github.png" alt="logo html et css" />
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/vscode.png" alt="logo html et css" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;