const fs = require('fs')

exports.readDb = async (fileName) => {
  return await fs.readFile('./lib/db/' + fileName, 'utf8', (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err)
      return
    }
    try {
      const db = JSON.parse(jsonString)
      if (db === undefined) {
        db = {
          codes: [],
          credentials: []
        }
      }
      return db;
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })
}

exports.writeDb = (fileName, db) => {

  const jsonString = JSON.stringify(db)
  fs.readFileSync('./lib/db/' + fileName, jsonString, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}