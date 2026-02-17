import '../components/Skills.scss';

function Skills() {

    return (
        <>
            <div className='skills' id='skills'>
                <h2 className='skills__title'>Compétences Téchniques et Outils</h2>
                <div className='skills__front-back'>
                    <div className='skills__front-back-container'>
                        <h4 className='skills__title-tech'>Frontend</h4>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/html-css.png" alt="logo html et css" title='HTML/CSS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/sass.png" alt="logo Sass" title='Sass'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/javascript.webp" alt="logo Javascript" title='Javascript'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/react.png" alt="logo React" title='React'/>
                            </div>
                        </div>
                    </div>
                    <div className='skills__front-back-container'>
                        <h4 className='skills__title-tech'>Backend</h4>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/nodejs.png" alt="logo NodeJS" title='NodeJS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/mongodb.png" alt="logo MongoDB" title='MongoDB' />
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/api.png" alt="logo API Rest" title='API Rest'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills__title-tools'>
                    <h4>Outils</h4>
                </div>
                <div className='skills__tools'>
                    <div className='skills__tool'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/git.png" alt="logo Git" title='Git'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/github.png" alt="logo GitHub" title='GitHub'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/vscode.png" alt="logo VS Code" title='VS Code'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;