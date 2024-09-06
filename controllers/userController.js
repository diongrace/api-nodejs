// controllers/userController.js

const login = (req, res) => {
    const { email, password } = req.body;
  
    const checkUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(checkUserQuery, [email, password], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Erreur de serveur.' });
        return;
      }
  
      if (result.length === 0) {
        res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        return;
      }
  
      res.status(200).json({ message: 'Connexion réussie.' });
    });
  };
  
  module.exports = { signUp, login }; // N'oubliez pas d'exporter la nouvelle fonction
  