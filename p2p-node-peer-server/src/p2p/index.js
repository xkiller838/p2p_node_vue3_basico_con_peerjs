const { PeerServer } = require('peer');

class p2p {
  constructor(port, path) {
    // Inicializar el servidor Peer
    this.peerServer = PeerServer({ port, path });

    this.peerServer.on('connection', (client) => {
      console.log(`Client connected with ID ${client.getId()}`);
    });
  }
   
}

module.exports = p2p;