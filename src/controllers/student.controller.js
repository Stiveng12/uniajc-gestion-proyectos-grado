// src/controllers/student.controller.js

module.exports = {
  // Mostrar el formulario de registro de proyecto
  mostrarFormularioProyecto: (req, res) => {
    res.render('student/proyecto_form');
  },

  // Procesar el registro de proyecto
  registrarProyecto: async (req, res) => {
    const { titulo, descripcion, fechaEntrega } = req.body;
    const userId = req.session.usuario.id; // Obtener el ID del estudiante desde la sesión

    try {
      await db.query(
        'INSERT INTO proyectos (titulo, descripcion, fecha_entrega, estudiante_id) VALUES ($1, $2, $3, $4)',
        [titulo, descripcion, fechaEntrega, userId]
      );

      res.redirect('/estudiante');  // Redirigir al dashboard del estudiante después de registrar el proyecto
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al registrar el proyecto');
    }
  }
};