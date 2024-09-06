// routes/userRoutes.js
const express = require('express');
const { signUp, login } = require('../controllers/userController'); 
const router = express.Router();

// Définir les routes
router.post('/signup', signUp);
router.post('/login', login); 

module.exports = router;
