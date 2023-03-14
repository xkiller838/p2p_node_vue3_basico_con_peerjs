<template>
  <div>
    <div v-if="peerId">
      Mi ID es: {{ peerId }}
      <input type="text" v-model="remotePeerId"/>
      <button @click="connect">Conectar con nodo 2 remoto</button>
    </div>
    <form @submit.prevent="sendMessage">
        <input type="text" v-model="message">
        <button>Enviar mensaje</button>
      </form>
    <div v-if="connected">
        <ul>
          <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Peer from 'peerjs';

export default {
  data() {
    return {
      peerId: null,
      peer: null,
      conn: null,
      connected: false,
      message: '',
      messages: [], // Agrega una variable para almacenar los mensajes
      newPeerId:'',
    };
  },
  mounted() {
    // Inicializa la conexión PeerJS
      this.peer = new Peer(this.peerId,{
      host: "localhost",
      port: 9000,
      path: "/peer",
    });

    // Escucha el evento "open" para obtener el ID del nodo
    this.peer.on('open', (id) => {
      this.peerId = id;
    });

    // Escucha el evento "connection" para recibir conexiones entrantes
    this.peer.on('connection', (conn) => {
      console.log('Conexión entrante desde', conn.peer);

      // Almacena la conexión entrante
      this.conn = conn;

      // Escucha el evento "open" para confirmar la conexión
      this.conn.on('open', () => {
        console.log('Conexión establecida');
        this.connected = true;
      });

      // Escucha el evento "data" para recibir datos desde el nodo remoto
      this.conn.on('data', (data) => {
        console.log('Datos recibidos:', data);
        this.messages.push(`Recibido: ${data}`);
      });
    });
  },
  methods: {
    connect() {
      // Establece una conexión con el nodo remoto utilizando su ID
      this.conn = this.peer.connect(this.newPeerId);

      // Escucha el evento "open" para confirmar la conexión
      this.conn.on('open', () => {
        console.log('Conexión establecida');
        this.connected = true;
      });

      // Escucha el evento "data" para recibir datos desde el nodo remoto
      this.conn.on('data', (data) => {
        console.log('Datos recibidos:', data);
        this.messages.push(`Recibido: ${data}`);
      });
    },
    sendMessage() {
      // Envía el mensaje a través de la conexión
      this.conn.send(this.message);
      this.messages.push(`Enviado: ${this.message}`);
      this.message = '';
    }
  }
}
</script>
