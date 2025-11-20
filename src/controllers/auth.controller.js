const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Asegúrate de que este modelo esté bien configurado

// Función para manejar el login
async function login(req, res) {
  const { email, password } = req.body;

  // Buscar el usuario por correo
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.render('login', { error: 'Correo o contraseña incorrectos' });
  }

  // Comparar la contraseña ingresada con el hash en la base de datos
  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) {
    return res.render('login', { error: 'Correo o contraseña incorrectos' });
  }

  // Si las credenciales son correctas, guardar los datos del usuario en la sesión
  req.session.user = user;
  res.redirect('/dashboard'); // Redirigir al dashboard si el login es exitoso
}

module.exports = {
  login,
};