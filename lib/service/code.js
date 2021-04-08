const makeid = (length) => {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('').toUpperCase()
}

exports.getCode = (mac) => {

  const code = makeid(4);

  // Persistimos la mac y el codigo en la db
  console.log({ code, mac })

  return code;
}
