/*
 * Imports
 */

// Importo el helper con los errores
// const error = require('../helper/error');

// Importo  expres y creo el router
const express = require('express');
const { getCode } = require('../service/code');
const router = express.Router({ mergeParams: true });
const services = require('../service')
/*
 * Rutas
 */
router.get('/code', (req, res, next) => {
  // code + macaddress
  const mac = req.query.mac;
  const code = getCode(mac);
  return res.status(200).json({ code });
});

router.get('/credentials', (req, res, next) => {
  // code, macaddress
  return res.status(200).json({
    "mail": "correo@correo.com.ar",
    "pass": "12345678",
  });
});

router.post('/credentials', async (req, res, next) => {
  try {
    const user = req.body.mail,
      pass = req.body.pass,
      code = req.body.code;
      await services.users.postCredentials({user, pass, code})
      return res.status(200).json({ message: 'Se generaron las credenciales correctamente' });
  } catch (error) {
    console.log(error)
  }
});

// Exportamos las rutas
module.exports = router;