import dotenv from 'dotenv';
dotenv.config();
import sgMail from '@sendgrid/mail'; // PACKAGE SENDGRID 

// CONFIG SENGRID AVEC LA KEY SECRET
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const CONTACT_EMAIL = process.env.EMAIL_TO || 'mathiasmaillydepinho@gmail.com';
const FROM_EMAIL = process.env.EMAIL_FROM || 'mathiasmaillydepinho@gmail.com';

export async function sendContactEmail(name, senderEmail, message) {
  try {
    console.log(`\n📧 Tentative d'envoi d'email via SendGrid...`);
    console.log(`   De: ${FROM_EMAIL}`);
    console.log(`   À: ${CONTACT_EMAIL}`);
    console.log(`   Expéditeur: ${senderEmail}`);

    const msg = {
      to: CONTACT_EMAIL,
      from: FROM_EMAIL,
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p>
          </div>

          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Pour répondre, tu peux envoyer un email directement à: <strong>${escapeHtml(senderEmail)}</strong>
          </p>
        </div>
      `,
      replyTo: senderEmail
    };

    const response = await sgMail.send(msg);
    
    console.log('✅ Email envoyé avec succès!');
    console.log('   Status:', response[0].statusCode);
    return { success: true, messageId: response[0].headers['x-message-id'] };

  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email via SendGrid:');
    console.error('   Code:', error.code);
    console.error('   Message:', error.message);
    
    if (error.code === 401) {
      console.error('   → Clé API SendGrid invalide ou manquante');
      console.error('   → Vérifiez SENDGRID_API_KEY dans .env');
    }
    
    if (error.code === 403) {
      console.error('   → Email "from" non autorisé');
      console.error('   → Vérifiez EMAIL_FROM dans .env');
    }
    
    return { success: false, error: error.message };
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}