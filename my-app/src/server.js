var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('connected');
  socket.on('lands', function(degree){
    io.emit('degree', degree);
  })
});

var port = 1337;
server.listen(port, function(){
  console.log('listening');
})
