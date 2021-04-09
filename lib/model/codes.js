// Importamos mongoose
var { Schema, model } = require('mongoose');

// Creamos el esquema
var codesSchema = new Schema({
  code: { type: String, required: true },
  mac: { type: String, required: true },
}, {
  timestamps: true
});


// Exportamos el Usuario
module.exports = model('Codes', codesSchema);