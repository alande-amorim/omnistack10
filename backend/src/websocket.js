const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs }  = socket.handshake.query;
    const techsArray = parseStringAsArray(techs);

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: techsArray
    });
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(conn => {
    return calculateDistance(coordinates, conn.coordinates) < 10
    && conn.techs.some(item => techs.includes(item));
  });
}

exports.sendMessage = (to, message, data) => {
  to.forEach(conn => {
    io.to(conn.id).emit(message, data);
  });
}
