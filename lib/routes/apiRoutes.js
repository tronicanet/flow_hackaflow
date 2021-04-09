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
router.get('/code', async (req, res, next) => {
  const { mac } = req.query;
  const code = await getCode(mac);
  return res.status(200).json({ code });
});

router.get('/credentials', async (req, res, next) => {
  const { code, mac } = req.query;
  return res.status(200).json({
    "mail": process.env.MOCK_MAIL || "correo@correo.com.ar",
    "pass": process.env.MOCK_PASS || "12345678",
  });
});

router.post('/credentials', async (req, res, next) => {
  const { mail, pass, code } = req.body;
  setCredentials(mail, pass, code);
  return res.status(200).json({ message: 'Se generaron las credenciales correctamente' });
});

// Exportamos las rutas
module.exports = router;