const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const app = express()
let server = http.createServer(app)

// Backend communication
module.exports.io = socketIO(server)
require('./sockets/sockets')

server.listen(4200, (err) => {
    if (err) throw new Error(err)
    console.log('Server running at PORT ' + 4200)
})