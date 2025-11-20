CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  rol_id INTEGER NOT NULL REFERENCES roles(id),
  creado_en TIMESTAMP DEFAULT NOW()
);

CREATE TABLE proyectos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  estudiante_id INTEGER NOT NULL REFERENCES usuarios(id),
  director_id INTEGER REFERENCES usuarios(id),
  estado VARCHAR(50) NOT NULL DEFAULT 'Registrado',
  creado_en TIMESTAMP DEFAULT NOW()
);

CREATE TABLE entregables (
  id SERIAL PRIMARY KEY,
  proyecto_id INTEGER NOT NULL REFERENCES proyectos(id),
  tipo VARCHAR(50) NOT NULL,
  nombre_archivo VARCHAR(255) NOT NULL,
  ruta_archivo VARCHAR(255) NOT NULL,
  subido_por INTEGER NOT NULL REFERENCES usuarios(id),
  fecha_subida TIMESTAMP DEFAULT NOW()
);

CREATE TABLE observaciones (
  id SERIAL PRIMARY KEY,
  entregable_id INTEGER NOT NULL REFERENCES entregables(id),
  autor_id INTEGER NOT NULL REFERENCES usuarios(id),
  comentario TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT NOW()
);

CREATE TABLE asignaciones_jurado (
  id SERIAL PRIMARY KEY,
  proyecto_id INTEGER NOT NULL REFERENCES proyectos(id),
  jurado_id INTEGER NOT NULL REFERENCES usuarios(id),
  fecha_asignacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sustentaciones (
  id SERIAL PRIMARY KEY,
  proyecto_id INTEGER NOT NULL REFERENCES proyectos(id),
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  lugar VARCHAR(255),
  estado VARCHAR(50) DEFAULT 'Programada'
);

CREATE TABLE evaluaciones (
  id SERIAL PRIMARY KEY,
  proyecto_id INTEGER NOT NULL REFERENCES proyectos(id),
  jurado_id INTEGER NOT NULL REFERENCES usuarios(id),
  nota NUMERIC(2,1) NOT NULL,
  comentario TEXT,
  fecha TIMESTAMP DEFAULT NOW()
);

CREATE TABLE actas (
  id SERIAL PRIMARY KEY,
  proyecto_id INTEGER NOT NULL REFERENCES proyectos(id),
  fecha_generacion TIMESTAMP DEFAULT NOW(),
  contenido TEXT
);

INSERT INTO roles (nombre) VALUES 
('Estudiante'),
('Director'),
('Jurado'),
('Coordinacion');
