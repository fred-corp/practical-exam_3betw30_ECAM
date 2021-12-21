const { runInThisContext } = require("vm")

class Appartment {
  constructor(rooms = []) {
    this.rooms = rooms
  }

  addRoom (newRoom) {
    this.rooms.push(newRoom)
  }

  removeRoom(removeRoom) {
    this.rooms = this.rooms.filter(room => room != removeRoom)
  }
}

module.exports = Appartment