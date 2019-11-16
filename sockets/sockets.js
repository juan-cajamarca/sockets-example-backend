const { io } = require('../index')
const Users = require('../classes/users')
const { createMessage } = require('../utils/createMessage')

const users = new Users()

io.on('connection', (client) => {
    client.on('sendMessage', (message, callback) => {
        console.log(message)
        callback()
    })

    client.on('enterChat', (message, callback) => {
        const onlineUsers = users.addUser(client.id, message.username)
        client.broadcast.emit('usersList', `${message.username} has joined the group`)
        callback(onlineUsers)
    })

    client.on('disconnect', () => {
        let userDeleted = users.deleteUser(client.id)
        if (userDeleted !== undefined) {
            client.broadcast.emit('usersList', createMessage('Admin', `${userDeleted.name} has left the group`))
        }
    })
})