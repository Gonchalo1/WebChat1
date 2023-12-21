// app.js (Servidor)
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('port', 3000);
app.use(express.static(__dirname + "/public"));

server.listen(app.get('port'), function(){
    console.log('El servidor ha iniciado en el puerto ' + app.get('port'));
});

io.on('connection', function(socket) {
    console.log('Un usuario se ha conectado');

    socket.on('mensaje-del-cliente', function(data){
        console.log('Mensaje del cliente: ' + data);
        // Envía el mensaje a todos los clientes conectados, incluido el remitente
        io.emit('mensaje-del-servidor', data + "<br>");
    });
});
