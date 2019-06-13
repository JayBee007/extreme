const socketIO = require("socket.io");

module.exports = function(server) {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    socket.on('chat:message', (data) => {
      io.emit('chat:message', data)
    })
  })
};
