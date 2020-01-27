const express = require('express');

const apiRouter = require('./api-router.js');
const configMiddleware = require('./config-middleware.js');

const server = express();

configMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;