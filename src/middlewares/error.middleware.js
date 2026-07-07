export const notFound = (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Error interno de servidor';
  res.status(status).json({ error: message });
};
