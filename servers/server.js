const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	socket.on('new',(str)=>{
		socket.broadcast.emit('data',str)
	});
});

server.listen(port,()=>{console.log(`SERVER UP ON ${port}`);});