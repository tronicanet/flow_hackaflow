/*
 * Imports
 */

// Importo el helper con los errores
// const error = require('../helper/error');

// Importo  expres y creo el router
const express = require('express');
const router = express.Router({ mergeParams : true });
/*
 * Rutas
 */
router.get('/code', (req, res, next) => {
  const mac = req.query.mac;
  const code = '123455'; 
  console.log({ code })
  return res.status(200).json({ code });
});

router.get('/credentials', (req, res, next) => {
  return res.status(200).json({
    "mail": "correo@correo.com.ar",
    "pass": "12345678",
});
});

router.post('/credentials', (req, res, next) => {
  const mail = req.body.mail, 
        pass = req.body.pass, 
        code = req.body.code;
  return res.status(200).json({message: 'Se generaron las credenciales correctamente'});
});

// Exportamos las rutas
module.exports = router;