const express = require('express');
const cors = require('cors');  // Assurez-vous que cette ligne est présente

const app = express();
const port = 3000;

// Utilisation du middleware cors
app.use(cors());

// Middleware pour parser les JSON
app.use(express.json());

// Point de terminaison pour l'inscription
app.post('/api/users/signup', (req, res) => {
  res.status(201).send('Utilisateur inscrit');
});

// Démarrer le serveur
app.listen(port, '127.0.0.1', () => {
  console.log(`Serveur en écoute sur http://127.0.0.1:${port}`);
});
