const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller'); // Ajusta la ruta si es necesario

// Ruta para mostrar el formulario de login
router.get('/login', (req, res) => {
  res.render('login'); // Renderiza la vista del login
});

// Ruta para manejar el inicio de sesión
router.post('/login', authController.login); // Llama al controlador de login

module.exports = router;
