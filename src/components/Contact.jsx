import { useState } from 'react';
import '../components/Contact.scss';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

function Contact() {

    const { t } = useTranslation(); // TRADUCTION MESSAGE

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

    const MaxChars = 1000; // MAX 1000 CHARACTER
    const remaining = MaxChars - formData.message.length;

    // GERER LES CHAGEMENTS D'INPUT
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Effacer le feedback quand on recomence à écrire
        setFeedback({ type: '', message: '' });
    };

    // GERER LES CHANGEMENT DU MESSAGE AVEC LIMITE DU CHARACTER
    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length <= MaxChars) {
            setFormData({ ...formData, message: value });
            setFeedback({ type: '', message: '' });
        }
    };

    // SOUMETTRE LE FORM
    const handleSubmit = async (e) => {
        e.preventDefault();

        // VALIDATION
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFeedback({
                type: 'error',
                message: t('Contact.error-empty-fields') || 'Veuillez remplir tous les champs'
            });
            return;
        }

        // VALIDATION MAIL
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFeedback({
                type: 'error',
                message: t('Contact.error-invalid-email') || 'Email invalide'
            });
            return;
        }

        setLoading(true);

        // FETCH API POST
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (data.success) {
                setFeedback({
                    type: 'success',
                    message: t('Contact.success-message') || 'Votre message a été envoyé avec succès ! ✅'
                });
                // RESET LE FORM
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setFeedback({
                    type: 'error',
                    message: data.message || (t('Contact.error-send') || 'Erreur lors de l\'envoi du message')
                });
            }
        } catch (error) {
            console.error('Erreur:', error);
            setFeedback({
                type: 'error',
                message: t('Contact.error-server') || 'Erreur de connexion au serveur'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='contact' id='contact'>
                <AnimatedSection>
                    <h2 className='contact__title'>{t('Contact.title')}</h2>
                    <div className='contact__container'>
                        <form onSubmit={handleSubmit}>
                            <div className='contact__info'>
                                <div className='contact__name'>
                                    <label htmlFor="name">
                                        <p className='contact__subtitle'>{t('Contact.name')}</p>
                                        <textarea
                                            id='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={t('Contact.placeholder-name')}
                                            className='contact__input'
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                                <div className='contact__email'>
                                    <label htmlFor="email">
                                        <p className='contact__subtitle'>{t('Contact.email')}</p>
                                        <textarea
                                            id='email'
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={t('Contact.placeholder-email')}
                                            className='contact__input'
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">
                                    <p className='contact__subtitle'>{t('Contact.message')}</p>
                                    <textarea
                                        id='message'
                                        value={formData.message}
                                        onChange={handleMessageChange}
                                        maxLength={MaxChars}
                                        className='contact__input-message'
                                        placeholder={t('Contact.placeholder-message')}
                                        disabled={loading}
                                    />
                                </label>
                                <span className='contact__chars'>{formData.message.length} / {MaxChars}</span>
                            </div>
                            {/* MESSAGE DE FEEDBACK (succès/erreur) */}
                            {feedback.message && (
                                <div className={`contact__feedback contact__feedback--${feedback.type}`}>
                                    {feedback.message}
                                </div>
                            )}

                            <div className='contact__btn'>
                                <button
                                    type='submit'
                                    className='contact__submit'
                                    disabled={loading}
                                >
                                    {loading ? (t('Contact.sending') || 'Envoi...') : (t('Contact.send') || 'Envoyer')}
                                </button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </>
    )
}

export default Contact;