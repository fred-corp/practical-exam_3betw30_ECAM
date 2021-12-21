const express = require('express')
const router = express.Router()

const roomController = require('./controllers/roomController.js')
const appartmentController = require('./controllers/appartmentController.js')

// ping server, see if the site is up
router.get('/ping', function (req, res) {res.send(200, { message: 'ok' })})

router.get('/', roomController.encodeRoom)

router.post('/add', roomController.addRoom)

router.get('/appartment', appartmentController.showAppartment)

module.exports = router
