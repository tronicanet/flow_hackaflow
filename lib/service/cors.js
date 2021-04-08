// Importamos CORS
const cors = require('cors');

// Creamos las opciones de CORS
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  // "preflightContinue": false,
  // "optionsSuccessStatus": 204
}

// Exportamos la funcion de inicializacion de CORS
exports.initCORS = () => {
  return cors(corsOptions);
}
