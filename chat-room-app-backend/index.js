const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const port = process.env.PORT || 3000;

const expressServer = createServer(app);

const io = new Server(expressServer);


expressServer.listen(port, () => {
    console.log(`Server open in ${port} port`)
})