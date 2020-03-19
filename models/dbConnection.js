const mysql = require('mysql')

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
}

const connection = mysql.createConnection(config)

connection.connect(function(err) {
    err ? console.log(err) : console.log(`Db connected.`)
})

module.exports = connection