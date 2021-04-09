const db = require('../../models')

const postCredentials = async (credentials) => {
    try {
        const credential = await db.Users.create({
            user: credentials.user,
            pass: credentials.pass,
            idcode: credentials.code
        })
        return credential
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    postCredentials
}