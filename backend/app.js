import express from 'express';
import mongoose from 'mongoose';
import { sendContactEmail } from './emailService.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio',
  { serverApi: { version: '1', strict: true, deprecationErrors: true } })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES API 

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs sont obligatoires (name, email, message)'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email invalide'
      });
    }

    const result = await sendContactEmail(name, email, message);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Votre message a été envoyé avec succès ! ✅'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Erreur lors de l\'envoi du message'
      });
    }
  } catch (error) {
    console.error('Erreur serveur:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur interne'
    });
  }
});

// Route API pour vérifier le serveur
app.get('/api/status', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur Portfolio API',
    version: '1.0.0',
    status: 'OK'
  });
});

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback pour SPA - rediriger tout vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// GESTION DES ERREURS 

app.use((err, req, res, next) => {
  console.error('Erreur:', err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Erreur serveur'
  });
});

export default app;