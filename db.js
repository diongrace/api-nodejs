const mysql = require('mysql');

// Créez une connexion MySQL
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',       
  password: 'root', 
  database: 'apicode' 
});

// Connectez-vous à la base de données MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
