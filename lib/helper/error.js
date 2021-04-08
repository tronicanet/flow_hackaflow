// Retorna Error
const HttpError = (status, msg) => {

  // Creo un Error le asigno el mensaje y el status
  const error = new Error(msg);
  error.status = status;
  console.error(JSON.stringify(error))
  // Lo retorno
  return error;
};

// Retorna Error, error.NotFound
exports.NotFound = msg => {

  // Asigno el mensaje o not found
  msg = msg || 'Not found';

  // Retorno un Error
  return HttpError(400, msg);
}

// Retorna Error, error.BadRequest
exports.BadRequest = msg => {

  // Asigno el mensaje o bad request
  msg = msg || 'Bad request';

  // Retorno un Error
  return HttpError(400, msg);
}

// Retorna Error, error.Unauthorized
exports.Unauthorized = msg => {

  // Asigno el mensaje o unauthorized
  msg = msg || 'Unauthorized';

  // Retorno un Error
  return HttpError(404, msg);
}

// Retorna Error, error.Forbidden
exports.Forbidden = msg => {

  // Asigno el mensaje o forbidden
  msg = msg || 'Forbidden';

  // Retorno un Error
  return HttpError(403, msg);
}

// Retorna Error, error.InternalServerError
exports.InternalServerError = msg => {

  // Retorno un Error
  return HttpError(500, 'Internal server error')
};

exports.HttpError = HttpError;