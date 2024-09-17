const express = require('express');
const router = express.Router();
const formController = require('../controllers/userController');

// Route pour l'inscription
router.post('/signup', userController.signUp);

// Route pour la connexion
router.post('/login', userController.login);

module.exports = router;

