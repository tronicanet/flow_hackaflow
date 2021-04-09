const { Credentials, Codes } = require("../model/db")

exports.setCredentials = async (mail, pass, code) => {
  try {
    let codesFound = await Codes.findOne({ code })
    if (codesFound && codesFound.code) {
      let foundCredential = await Credentials.findOne({ code })
      if (foundCredential && foundCredential.mail) {
        let { mail, pass, code } = foundCredential;
        console.log('Credentials code ' + code + ' alredy exist')
        return { message: 'Credentials alredy exist', credentials: { mail, pass, code } }
      }
      else {
        let newCredential = new Credentials({ mail, pass, code });
        await newCredential.save();
        console.log('Credentials saved', { mail, pass, code })
        return { message: 'The credentials were generated successfully', credentials: { mail, pass, code } }
      }
    }
    else {
      console.log('Code ' + code + ' doesn´t exist')
      throw new Error('Code ' + code + ' doesn´t exist')
    }
  }
  catch (error) {
    throw error;
  }

}

exports.checkCode = async (code, mac) => {

  try {
    // Existe el codigo 
    let foundCode = await Codes.findOne({ code });
    if (foundCode && foundCode.code) {

      // Esta asociada a la misma mac
      if (foundCode.mac && foundCode.mac === mac) {
        let found = await Credentials.findOne({ code })

        if (found && found.mail) {
          let { mail, pass, code } = found
          return { mail, pass, code }
        }
        else {
          console.log('Credentials doesn´t exist')
          throw new Error('Credentials doesn´t exist')
        }
      }
      else {
        console.log('MAC doesn´t match')
        throw new Error('MAC doesn´t match')
      }
    }
    else {
      console.log('Code ' + code + ' doesn´t exist')
      throw new Error('Code ' + code + ' doesn´t exist')
    }

  }
  catch (error) {
    throw error
  }
}