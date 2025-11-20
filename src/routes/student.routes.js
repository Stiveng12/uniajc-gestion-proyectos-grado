// src/routes/student.routes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const { verificarAutenticacion } = require('../middlewares/auth.middleware'); // Importar la función

// Ruta para mostrar el formulario de proyecto
router.get('/proyecto/nuevo', verificarAutenticacion, studentController.mostrarFormularioProyecto);

// Ruta para procesar el registro de proyecto
router.post('/proyecto/nuevo', verificarAutenticacion, studentController.registrarProyecto);

module.exports = router;
