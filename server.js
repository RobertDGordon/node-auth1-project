const express = require('express');

const apiRouter = require('./api/api-router');
const configMiddleware = require('./api/config-middleware.js');

const server = express();

configMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;