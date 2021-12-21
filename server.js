const express = require('express')
const app = express()
const session = require('express-session')
const routes = require('./routes')

const port = 80

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(session({
  secret: '620f5e41-3e8f-4603-a1b0-df2de3c4432e',
  resave: false,
  saveUninitialized: true
}))

app.use('/', routes)

app.listen(port, function () {
  console.log('server is listening on port ' + port)
})
