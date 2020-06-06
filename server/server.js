const express = require('express')
const WebSocket = require('ws')
const ws = new WebSocket.Server({port: 6060})

ws.on('connection', ws => {
    ws.on('message', message => {
        console.log(message)
    })
    ws.send(JSON.stringify({data: 'hello'}))
})