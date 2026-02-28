import nodemailer from 'nodemailer';

// ✅ SOLUTION: Variables codées directement (pas de .env)
const GMAIL_USER = 'mathiasmaillydepinho@gmail.com';
const GMAIL_PASSWORD = 'mnvlnjmgvyptwfcn';
const CONTACT_EMAIL = 'mathiasmaillydepinho@gmail.com';

// Configurer le transporteur Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD
  }
});

export async function sendContactEmail(name, senderEmail, message) {
  try {
    console.log(`\n📧 Tentative d'envoi d'email...`);
    console.log(`   De: ${GMAIL_USER}`);
    console.log(`   À: ${CONTACT_EMAIL}`);
    console.log(`   Expéditeur: ${senderEmail}`);

    const mailOptions = {
      from: GMAIL_USER,
      to: CONTACT_EMAIL,
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

    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email envoyé avec succès!');
    console.log('   Response:', info.response);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:');
    console.error('   Code:', error.code);
    console.error('   Message:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('   → Problème d\'authentification Gmail');
      console.error('   → Vérifiez que le mot de passe est correct');
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