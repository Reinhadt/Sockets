const express = require('express');
const socketIO = require('socket.io')
const http = require('http')

const path = require('path');

const app = express();
//inicializamos un servidor y le pasamos por parámetro el de express
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));

//io = comunicación directa y constante del backend
module.exports.io = socketIO(server)
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});