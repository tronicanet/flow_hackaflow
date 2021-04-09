// Importamos mongoose
var mongoose = require('mongoose');

// Obtenemos la cadena de conexion
var dbURI = process.env.MONGO_DB_CONNECTION_STRING

// Creamos la coneccion con la base de datos
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Maneja varios eventos de la base de datos
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to: ', dbURI);
});

// En error de la base
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ', err);
});

// En desconexion
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose logged out');
});

// Manejamos procesos de terminacion inesperada
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose got disconnected due to the application terminating unexpectedly');
    process.exit(0);
  });
});

// Cargamos y exportamos todos los modulos de mongoose
exports.Codes = require('./codes');
exports.Credentials = require('./credentials');
