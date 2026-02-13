import { useState } from 'react';
import '../components/Contact.scss';

function Contact() {

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
                <h2 className='contact__title'>Prenons Contact</h2>
                <div className='contact__container'>
                    <div className='contact__info'>
                        <div className='contact__name'>
                            <p>Nom *</p>
                            <label htmlFor="name">
                                <textarea
                                    id='name'
                                    placeholder='Votre nom'
                                    className='contact__input' />
                            </label>
                        </div>
                        <div className='contact__email'>
                            <p>Email *</p>
                            <label htmlFor="email">
                                <textarea
                                    type="email"
                                    id='email'
                                    placeholder='votre@email.com'
                                    className='contact__input' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Message *</p>
                        <label htmlFor="message">
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
                                placeholder='Votre message...' />
                        </label>
                        <span className='contact__chars'>{formData.message.length} / {MaxChars}</span>
                    </div>
                    <div className='contact__btn'>
                        <button type='submit' className='contact__submit'>Envoyer</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;