const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Importer les routes
const formRoutes = require('./routes/formRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utiliser les routes
app.use('/api/forms', formRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
