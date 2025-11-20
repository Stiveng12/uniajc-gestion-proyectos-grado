// Importación de dependencias
const express = require('express');
const app = express();
const path = require('path');

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear datos del formulario
app.use(express.urlencoded({ extended: true }));

// Ruta para mostrar el login
app.get('/login', (req, res) => {
   res.render('login'); // Renderiza la vista de login sin validación
});

// Ruta para procesar el login
app.post('/login', (req, res) => {
   // Redirige directamente al dashboard después de "iniciar sesión"
   res.redirect('/dashboard'); // Redirige a la página principal o dashboard
});

// Ruta para el dashboard (sin autenticación)
app.get('/dashboard', (req, res) => {
   res.render('dashboard'); // Muestra el dashboard o página principal
});

// Ruta para la página de inicio (Home)
app.get('/', (req, res) => {
   res.render('index'); // Página principal
});

// Configuración del puerto para la aplicación
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Servidor en ejecución en el puerto ${port}`);
});
