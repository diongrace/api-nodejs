// controllers/userController.js
const bcrypt = require('bcrypt');
const db = require('../db'); 
const saltRounds = 10;

// Fonction pour l'inscription
const signUp = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs doivent être remplis.' });
    }

    // Hacher le mot de passe avant de l'enregistrer
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur de serveur.' });
        }

        const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(insertUserQuery, [name, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
            }
            res.status(201).json({ message: 'Utilisateur créé avec succès.', id: result.insertId });
        });
    });
};

// Fonction pour la connexion
const login = (req, res) => {
    const { email, password } = req.body;

    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur de serveur.' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        const user = result[0];
        // Comparer le mot de passe fourni avec le mot de passe haché dans la base de données
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur de serveur.' });
            }

            if (!isMatch) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
            }

            res.status(200).json({ message: 'Connexion réussie.' });
        });
    });
};

module.exports = { signUp, login };
