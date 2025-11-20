// src/index.js

// Aquí es donde arranca tu servidor
const app = require('./app'); // Importa el archivo app.js
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Puerto de la aplicación (con valor por defecto 3000)
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
