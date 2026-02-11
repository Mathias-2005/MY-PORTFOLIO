import '../components/Contact.scss';

function Contact() {

    return (
        <>
            <div className='contact' id='contact'>
                <h2 className='contact__title'>Prenons Contact</h2>
                <div className='contact__container'>
                    <div className='contact__info'>
                        <div className='contact__name'>
                            <p>Nom *</p>
                            <label htmlFor="name">
                                <input type="textarea" id='name' placeholder='Votre nom' className='contact__input' />
                            </label>
                        </div>
                        <div className='contact__email'>
                            <p>Email *</p>
                            <label htmlFor="email">
                                <input type="email" id='email' placeholder='Votre@email.com' className='contact__input' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Message *</p>
                        <label htmlFor="contact__message">
                            <input type="textarea" id='message' className='contact__input-message' placeholder='Votre message...' />
                        </label>
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