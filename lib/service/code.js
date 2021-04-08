const { readDb } = require("../helper/file");

const makeid = (length) => {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('').toUpperCase()
}

exports.getCode = async (mac) => {

  const code = makeid(4);
  const obj = { code, mac }
  let db = await readDb('db.json');
  // let db = require('../db/db.json')
  db.codes.push(nuevo)
  writeDb('db.json', db);

  // Persistimos la mac y el codigo en la db
  console.log()

  return code;
}
