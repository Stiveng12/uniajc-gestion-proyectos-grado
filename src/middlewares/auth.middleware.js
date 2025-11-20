// src/middlewares/auth.middleware.js

const verificarAutenticacion = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect('/login');
  }
  next();  // Si está autenticado, continúa con la siguiente función
};

module.exports = { verificarAutenticacion };
