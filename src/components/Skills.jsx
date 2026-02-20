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
                        <h3 className='skills__title-tech'>{t('Skills.frontend')}</h3>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/html-css.webp" alt="logo html et css" title='HTML/CSS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/sass.webp" alt="logo Sass" title='Sass'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/javascript.webp" alt="logo Javascript" title='Javascript'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/react.webp" alt="logo React" title='React'/>
                            </div>
                        </div>
                    </div>
                    <div className='skills__front-back-container'>
                        <h3 className='skills__title-tech'>{t('Skills.backend')}</h3>
                        <div className='skills__techs'>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/nodejs.webp" alt="logo NodeJS" title='NodeJS'/>
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/mongodb.webp" alt="logo MongoDB" title='MongoDB' />
                            </div>
                            <div className='skills__container'>
                                <img className='skills__logo' src="/images/api.webp" alt="logo API Rest" title='API Rest'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills__title-tools'>
                    <h3>{t('Skills.tool')}</h3>
                </div>
                <div className='skills__tools'>
                    <div className='skills__tool'>
                        <div className='skills__container'>
                            <img className='skills__logo' src="/images/git.webp" alt="logo Git" title='Git'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="/images/github.webp" alt="logo GitHub" title='GitHub'/>
                        </div>
                        <div className='skills__container'>
                            <img className='skills__logo' src="/images/vscode.webp" alt="logo VS Code" title='VS Code'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;