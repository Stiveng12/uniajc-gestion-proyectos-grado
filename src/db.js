// src/db.js

const { Client } = require('pg');  // Cliente de PostgreSQL

// Configuración de la conexión
const client = new Client({
  host: 'localhost',
  port: 5432,  // Puerto por defecto de PostgreSQL
  user: 'postgres',  // Reemplaza con tu usuario de PostgreSQL
  password: 'TERESAe12',  // Reemplaza con tu contraseña de PostgreSQL
  database: 'uniajc_proyectos'  // Nombre de tu base de datos
});

// Conexión a la base de datos
client.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos', err.stack));

// Exportar el cliente para usarlo en otros archivos
module.exports = client;