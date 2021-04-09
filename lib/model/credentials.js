// Importamos mongoose
var { Schema, model } = require('mongoose');

// Creamos el esquema
var credentialsSchema = new Schema({
  mail: { type: String, required: true },
  pass: { type: String, required: true },
  code: { type: String, required: true },
}, {
  timestamps: true
});


// Exportamos el Usuario
module.exports = model('Credentials', credentialsSchema);