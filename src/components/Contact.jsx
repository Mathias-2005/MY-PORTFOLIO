import { useState } from 'react';
import '../components/Contact.scss';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const MaxChars = 1000;
    const remaining = MaxChars - formData.message.length;

    return (
        <>
            <div className='contact' id='contact'>
                <h2 className='contact__title'>{t('Contact.title')}</h2>
                <div className='contact__container'>
                    <div className='contact__info'>
                        <div className='contact__name'>
                            <label htmlFor="name">
                                <p>{t('Contact.name')}</p>
                                <textarea
                                    id='name'
                                    placeholder={t('Contact.placeholder-name')}
                                    className='contact__input' />
                            </label>
                        </div>
                        <div className='contact__email'>

                            <label htmlFor="email">
                                <p>{t('Contact.email')}</p>
                                <textarea
                                    type="email"
                                    id='email'
                                    placeholder={t('Contact.placeholder-email')}
                                    className='contact__input' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message">
                            <p>{t('Contact.message')}</p>
                            <textarea
                                value={formData.message}
                                onChange={(e) => {
                                    if (e.target.value.length <= MaxChars) {
                                        SetFormData({ ...formData, message: e.target.value });
                                    }
                                }}
                                maxLength={MaxChars}
                                id='message'
                                className='contact__input-message'
                                placeholder={t('Contact.placeholder-message')} />
                        </label>
                        <span className='contact__chars'>{formData.message.length} / {MaxChars}</span>
                    </div>
                    <div className='contact__btn'>
                        <button type='submit' className='contact__submit'>{t('Contact.send')}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;