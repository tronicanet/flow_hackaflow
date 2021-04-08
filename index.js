/*
 * Imports
 */

// Importamos OS
const os = require("os");

// Importamos express
const express = require('express');

// Importamos los errores
const error = require('./lib/helper/error');

// Importamos el middleware que maneja los errores
const errorHandler = require('./lib/middleware/error');

// Importo el endpoint token
const apiRoutes = require('./lib/routes/apiRoutes');


/* 
 * Aplicacion
 */

// Creo la instancia de la aplicacion
const app = express();

/* 
 * Middlewares
 */


// Seteamos bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 
 * Rutas
 */
const api = '/api/v1';

// Agregamos las rutas de api
app.use(api, apiRoutes);

// Creamos la ruta raiz
app.get('/', (req, res) => { 

  // Retornamos el mensaje
  res.send('API HackaFlow');
});


// Para todas las rutas que no existen creamos un middleware que retorna error.NotFound
app.all('/*', (req, res, next) => {

  next(error.NotFound('Recurso no existe'));
});

/* 
 * Middlewares
 */

// Agregamos middleware para manejar los errores de cliente o de servidor
app.use(errorHandler.ClientErrorHandler);
app.use(errorHandler.ServerErrorHandler);

/* 
 * Server
 */

// Ponemos a escuchar la aplicacion en el puerto 3000
const port = 8080;
const server = app.listen(port, () => {
  let serverStart = 'Server running http://' + os.hostname() + ':' + server.address().port;
  console.log(serverStart);
});