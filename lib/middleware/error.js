
// Maneja y retorna los errores provenientes de los clientes
exports.ClientErrorHandler = (err, req, res, next) => {

  // Si no hay status o es 500 se lo pasamos al proximo middleware
  if (!err.status || err.status == 500) return next(err);

  // Asignamos el mensaje
  message = { message: err.message };

  // Si no, retornamos el mensaje de error
  return res.status(err.status).json(message);
};

// Maneja y retorna los errores del servidor
exports.ServerErrorHandler = (err, req, res, next) => {

  // Retornamos el error del servidor
  const msg = err.message || 'Internal server error';

  // Asignamos el mensaje
  var message = { message: msg };

  // Retornamos el mensaje
  return res.status(500).json(message);
};