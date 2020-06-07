const express = require('express')
const WebSocket = require('ws')
const ws = new WebSocket.Server({port: 6060})

const game = require('./game')

console.log('Server Start on 127.0.0.1:' + ws.options.port)

function new_user_info() {
    console.log('New user connected')
    console.log('Online: ' + ws.clients.size)
}



rooms = new game.Rooms()

ws.on('connection', ws => {
    new_user_info()
    ws.user = new game.User(ws)
    ws.user.game = rooms.join(ws.user)

    if (ws.user.game.users.length > 1) {
        ws.user.game.sendOther(ws.user, {type: 'join', id: ws.user.id})
    }
    
    ws.on('message', message => {
        console.log('User ID', ws.user.id)
        console.log('MESSAGE', message)
        
    })
    ws.on('close', error => {
        console.log('User disconnected')
    })
    ws.send(JSON.stringify({data: 'hello'}))
})




