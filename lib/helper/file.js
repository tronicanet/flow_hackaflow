const fs = require('fs')

exports.readDb = (fileName) => {
  fs.readFile('./db/' + fileName, 'utf8', (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err)
      return
    }
    try {
      const db = JSON.parse(jsonString)
      return db
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })
}

exports.writeDb = (fileName) => {

}