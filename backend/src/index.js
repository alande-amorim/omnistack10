require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');
const { NODE_ENV, DB_DSN, APP_HOST, APP_PORT } = process.env;

const app = express();


mongoose.connect(DB_DSN, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

var server = app.listen(process.env.APP_PORT, () => {
  console.log( '\x1b[37m%s\x1b[31m%s\x1b[37m%s\x1b[0m', 'You are in ', NODE_ENV, ' environment!');
  console.log(`Server listening on: ${APP_HOST}:${APP_PORT}`)
});

setupWebsocket(server);
