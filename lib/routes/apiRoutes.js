/*
 * Imports
 */

// Importo  expres y creo el router
const express = require('express');
const { getCode } = require('../service/code');
const { setCredentials, checkCode } = require('../service/credential');
const router = express.Router({ mergeParams: true });

/*
 * Rutas
 */
router.get('/code', async (req, res, next) => {
  try {
    const { mac } = req.query;
    const code = await getCode(mac);
    return res.status(200).json({ code });
  }
  catch (error) {
    console.log('GET Code', {error: error.message})
    return res.status(400).json({error: error.message});
  }
});

router.get('/credentials', async (req, res, next) => {
  try {
    const { code, mac } = req.query;
    const credentials = await checkCode(code, mac)
    return res.status(200).json(credentials)
  }
  catch (error) {
    console.log('GET Credentials', {error: error.message})
    return res.status(400).json({error: error.message});
  }
});

router.post('/credentials', async (req, res, next) => {
  try {
    const { mail, pass, code } = req.body;
    const credentials = await setCredentials(mail, pass, code);
    return res.status(200).json({ message: 'Se generaron las credenciales correctamente', credentials });
  } 
  catch (error) {
    console.log('POST Credentials', {error: error.message})
    return res.status(400).json({error: error.message});
  }
});

// Exportamos las rutas
module.exports = router;