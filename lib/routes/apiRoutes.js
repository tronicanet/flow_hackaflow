/*
 * Imports
 */

// Importo el helper con los errores
// const error = require('../helper/error');

// Importo  expres y creo el router
const express = require('express');
const { getCode } = require('../service/code');
const { setCredentials } = require('../service/credential');
const router = express.Router({ mergeParams: true });

/*
 * Rutas
 */
router.get('/code', (req, res, next) => {
  const mac = req.query.mac;
  const code = getCode(mac);
  return res.status(200).json({ code });
});

router.get('/credentials', (req, res, next) => {
  const code = req.query.code;
  const mac = req.query.mac;
  return res.status(200).json({
    "mail": process.env.MOCK_MAIL||"correo@correo.com.ar",
    "pass": process.env.MOCK_PASS||"12345678",
  });
});

router.post('/credentials', (req, res, next) => {
  const mail = req.body.mail,
    pass = req.body.pass,
    code = req.body.code;
    setCredentials(mail, pass, code);
  return res.status(200).json({ message: 'Se generaron las credenciales correctamente' });
});

// Exportamos las rutas
module.exports = router;