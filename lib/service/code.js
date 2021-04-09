const fs = require('fs');
const { Codes } = require("../model/db");

const generateCode = length => {
  var result = [];
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('').toUpperCase()
}

exports.getCode = async mac => {
  try {
    let code;
    const found = await Codes.findOne({ mac })
    if (found && found.mac) {
      code = found.code
      console.log('Code already exists', { code, mac: found.mac })
    }
    else {
      code = generateCode(6);
      const newCode = new Codes({ code, mac })
      await newCode.save();
      console.log('Code saved', { code, mac })
    }
    return code;
  }
  catch (error) {
    throw error
  }
}
