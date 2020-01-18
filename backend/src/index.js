require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { NODE_ENV, DB_DSN, APP_HOST, APP_PORT } = process.env;

mongoose.connect(DB_DSN, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => {
    console.log( '\x1b[37m%s\x1b[31m%s\x1b[37m%s\x1b[0m', 'You are in ', NODE_ENV, ' environment!');
    console.log(`Server listening on: ${APP_HOST}:${APP_PORT}`)
});