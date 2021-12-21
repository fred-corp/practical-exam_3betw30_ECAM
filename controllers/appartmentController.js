const Appartment = require('../models/appartmentModel')
const Room = require('../models/roomModel')
const database = require('../dbconn.js')

exports.showAppartment = function (req, res) {
	database.query(' SELECT * from rooms;', function (error, resultSQL) {
		if (error) {
			res.status(400)
			res.send(error)
		} else {
			res.status(200)
			let roomList = []
			for (let i = 0; i < resultSQL.length; i++) {
				roomList.push(new Room(resultSQL[i].name, resultSQL[i].length, resultSQL[i].width))
			}
			res.render('appartment.ejs', {rooms: roomList})
		}
	})
	
}