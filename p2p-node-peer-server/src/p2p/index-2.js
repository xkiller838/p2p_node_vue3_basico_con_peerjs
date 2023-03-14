const { PeerServer } = require('peer');

class P2P {
  constructor() {
    // Inicializar el servidor Peer
    this.server = PeerServer({
      host: "localhost",
      port: 9000,
      path: "/peerjs",
    });

    // Inicializar el cliente Peer
    this.peer = new PeerServer();

    // Escuchar por nuevas llamadas entrantes
    this.peer.on('call', (call) => {
      // Responder la llamada
      call.answer(stream);

      // Escuchar por el evento 'stream' para procesar el stream remoto
      call.on('stream', (remoteStream) => {
        // Procesar el stream remoto
      });
    });
  }

  start() {
    this.server.on('connection', (client) => {
      console.log(`Client connected with ID ${client.getId()}`);
    });

    this.server.on('disconnect', (client) => {
      console.log(`Client disconnected with ID ${client.getId()}`);
    });

    this.peer.on('open', (id) => {
      console.log(`Peer connected to server with ID: ${id}`);
    });
  }
}

module.exports = P2P;
