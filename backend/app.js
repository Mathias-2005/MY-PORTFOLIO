import express from 'express'; // PACKAGE GERE LE SERVEUR / ROUTES
import mongoose from 'mongoose'; // PACKAGE MONGOOSE POUR LA STRUCTURATION DE DONNES ET VALIDATION
import { sendContactEmail } from './emailService.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb+srv://Mathias:Mathias2103@cluster1.lkm2zqy.mongodb.net/?appName=Cluster1',
  { serverApi: { version: '1', strict: true, deprecationErrors: true } })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - SIMPLE ET EFFICACE
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Gérer les requêtes OPTIONS
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

    // Validation des champs
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs sont obligatoires (name, email, message)'
      });
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email invalide'
      });
    }

    // Envoyer l'email
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

// ROUTE PAR DÉFAUT
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur Portfolio API',
    version: '1.0.0',
    status: 'OK'
  });
});

// ROUTE 404
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route non trouvée',
    path: req.path,
    method: req.method
  });
});

// Servir les fichiers statiques du frontend construit
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback pour SPA - rediriger vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur:', err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Erreur serveur'
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});

export default app;