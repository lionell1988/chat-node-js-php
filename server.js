/*
 * AUTENTICAZIONE: prima di accettare un client (un socket) devo autenticarlo. Una volta autenticato
 * stabilisco una connessione permanente con quel socket e lo aggiungo nell'array dei client connessi.
 */
const PORT = 8080;
var socketArray = new Array();
//var app = require('express')();
var express = require('express');
var app = express();
//var httpServer = require('http').Server(app); //linea di codice che equivale alle due successive

var http = require('http');
var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

app.get('/chat', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    //console.log(socket.id);
    socketArray.push(socket);
    console.log(socketArray.length + ' connected clients');
    socket.on('disconnect', function (data) {
        console.log(socket.id + ' user disconnected');
        console.log(deleteClient(socket) + ' connected clients');
    });
    socket.on('chat message', function (msg) {

        console.log('message: ' + msg.text);

        io.emit('chat message', msg);
    });
    socket.on('hello', (data) => {
        console.log(data);
    });
    
});


function deleteClient(socket) {
    var socketArrayLen = socketArray.length;
    for (var i = 0; i < socketArrayLen; i++) {
        //  console.log(socket.id);
        if (socketArray[i].id === socket.id) {
            socketArray.splice(i, 1);
            i = socketArrayLen;
        }
    }
    return socketArray.length;
}

httpServer.listen(PORT, () => {
    console.log('listening on *:' + PORT);
});

function checkAut(socket) {
    var id = socket.id;
    var socketArrayLen = socketArray.length;
    var found = false;
    for (var i = 0; i < socketArrayLen; i++) {
        //  console.log(socket.id);
        if (socketArray[i].id === socket.id) {
            found = true;
            i = socketArrayLen;
        }
    }
    return found;
}

function authenticate(){
    
}