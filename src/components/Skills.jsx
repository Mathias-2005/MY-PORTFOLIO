import '../components/Skills.scss';
import { useTranslation } from 'react-i18next';

function Skills() {

    const { t } = useTranslation();

    return (
        <>
            <div className='skills' id='skills'>
                <h2 className='skills__title'>{t('Skills.title')}</h2>
                <div className='skills__front-back'>
                    <div className='skills__front-back-container'>
                        <h4 className='skills__title-tech'>{t('Skills.frontend')}</h4>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/html-css.webp" alt="logo html et css" title='HTML/CSS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/sass.webp" alt="logo Sass" title='Sass'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/javascript.webp" alt="logo Javascript" title='Javascript'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/react.webp" alt="logo React" title='React'/>
                            </div>
                        </div>
                    </div>
                    <div className='skills__front-back-container'>
                        <h4 className='skills__title-tech'>{t('Skills.backend')}</h4>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/nodejs.webp" alt="logo NodeJS" title='NodeJS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/mongodb.webp" alt="logo MongoDB" title='MongoDB' />
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="../src/assets/images/api.webp" alt="logo API Rest" title='API Rest'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills__title-tools'>
                    <h4>{t('Skills.tool')}</h4>
                </div>
                <div className='skills__tools'>
                    <div className='skills__tool'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/git.webp" alt="logo Git" title='Git'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/github.webp" alt="logo GitHub" title='GitHub'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="../src/assets/images/vscode.webp" alt="logo VS Code" title='VS Code'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;