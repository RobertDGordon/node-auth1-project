const express = require('express');
const session = require('express-session');

const apiRouter = require('./api/api-router');
const configMiddleware = require('./api/config-middleware.js');

const server = express();

configMiddleware(server);

server.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "Secrets don't make friends...",
    cookie: {
        httpOnly: true,
        maxAge: 60000,
    secure: false, //Don't forget to change to true for production!
    },
}))

server.use('/api', apiRouter);

module.exports = server;