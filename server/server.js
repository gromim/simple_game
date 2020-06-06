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
    
    
    ws.on('message', message => {
        console.log(ws.user.id)
        console.log('MESSAGE', message)
        
    })
    ws.send(JSON.stringify({data: 'hello'}))
})




