class Room {
  constructor(name, length, width){
    this.name = name
    this.length = length
    this.width = width
  }
  
  setName (newName) {
    this.name = newName
  }

  getName () {
    return this.name
  }

  setLength (newLength) {
    this.length = newLength
  }

  getLength () {
    return this.length
  }

  setWidth (newWidth) {
    this.width = newWidth
  }

  getWidth () {
    return this.width
  }

  getSurface() {
    return this.width*this.length
  }
}

module.exports = Room