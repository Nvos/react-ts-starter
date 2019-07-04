// Poor example on websocket server... but it sortof works
const express = require('express');
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3002});

wss.on('connection', function(ws) {
    console.log('connected')
    ws.on('message', function sendToAllClients(message) {
        wss.clients.forEach(function(client) {
            client.send(message);
        })
        console.log(message);
    })
    
    let i = 0;
    let interval = setInterval(() => {
        i++;
        wss.clients.forEach(function(client) {
            client.send(JSON.stringify({type: 'Stuff'}));
            console.log("Sending " + i);
            console.log("Client count: ", wss.clients.size)
        });
        console.log("interval " + i)
    }, 1000)
    
    ws.on('close', () => {
        console.log('close')
    
        i = 0;
        clearInterval(interval);
    })
});


const app = express();

app.listen(3001, function() {
  console.log('listening on port 3001');
});