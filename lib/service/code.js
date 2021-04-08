const { readDb } = require("../helper/file");
const fs = require('fs')
const makeid = (length) => {
  var result = [];
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('').toUpperCase()
}

exports.getCode = (mac) => {

  const code = makeid(6);
  const obj = { code, mac }
  
  // Persistimos la mac y el codigo en la db
  console.log(obj)

  return code;
}
