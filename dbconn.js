const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'fredcorp.cc',
  user: 'webexam',
  password: 'AVerySecureButIrrelevantPasswordBeceauseThisIsNotObfuscatedOrHashed',
  port: 33006,
  database: 'exam'
})

connection.connect(function (error) { if (error) console.log(error) })

module.exports = connection
