const Room = require('../models/roomModel')
const database = require('../dbconn.js')

// Display the encode-room view
exports.encodeRoom = function (req, res) {
  res.render('encode-room.ejs')
}

exports.addRoom = function (req, res) {
  newRoom = new Room(req.body.name, req.body.length, req.body.width)
  const queryFormat = { name: newRoom.getName(), length: newRoom.getLength(), width: newRoom.getWidth()}
        database.query('INSERT INTO rooms set ?', queryFormat, function (error, resultSQL) {
          if (error) {
            res.status(400)
            res.send(error)
          }
        })
  console.log(newRoom)
  res.redirect('/appartment')
}