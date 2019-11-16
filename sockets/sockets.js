const { io } = require('../index')

io.on('connection', (client) => {
    client.emit('welcomeMessage', {
        title: 'Welcome!',
        message: 'You are online, enjoy!'
    }, function() {
        console.log('Message received by Client!')
    })

    client.on('disconnect', () => {
        console.log('User disconnected')
    })

    client.on('sendMessage', (message, callback) => {
        console.log(message)
        callback()
    })
})