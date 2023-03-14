<template>
  <div class="h">
     <p>Peer ID: {{ peerId }}</p>
     <input type="text" v-model="remotePeerId"/>
     <button @click="connect()">Conectar</button>

    <div>
      <div>
        <input v-model="message" placeholder="Escribe un mensaje" />
        <button @click="sendMessage">Enviar</button>
      </div>
      <div v-if="connected">
        <ul>
          <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Peer from "peerjs"; // Importa la biblioteca Peer.js
export default {
  data() {
    return {
      peer: null, // Variable para almacenar la instancia del objeto Peer.
      conn: null, // Variable para almacenar la conexión activa
      connected: false, // Variable booleana para indicar si la conexión está activa o no
      message: '', // Variable para almacenar el mensaje que el usuario va a enviar
      messages: [], // Agrega una variable para almacenar los mensajes
      peerId: "", // Variable para almacenar los mensajes recibidos y enviados
      remotePeerId: null // Variable para almacenar el ID del nodo local
    };
  },
  mounted() {    
    // Crea una nueva instancia del objeto Peer
    this.peer = new Peer(this.peerId,{
      host: "localhost", // Configura el host que se va a utilizar
      port: 9000, // Configura el puerto que se va a utilizar
      path: "/peer", // Configura la ruta para las solicitudes HTTP
    });

    // Escucha el evento "open" para obtener el ID del nodo local
    this.peer.on("open", (id) => {
      console.log(`Conexión establecida con el ID ${id}`);
      this.peerId = id;
    });

    // Escucha el evento "connection" para recibir conexiones entrantes
    this.peer.on('connection', (conn) => {
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
      this.conn = this.peer.connect(this.remotePeerId);

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
  },
};
</script>

<style lang="scss" scoped></style>
