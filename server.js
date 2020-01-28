const express = require('express');
const session = require('express-session');
const KnexSessionStore = require("connect-session-knex")(session);
const apiRouter = require('./api/api-router');
const configMiddleware = require('./api/config-middleware.js');

const server = express();

configMiddleware(server);

const sessionConfig = {
    name: "thisIsAName",
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "Secrets don't make friends...",
    cookie: {
        httpOnly: true,
        maxAge: 60000,
        secure: false, //Don't forget to change to true for production!
    },
    store: new KnexSessionStore({
        knex: require("./database/dbConfig.js"),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 60000,
    }),
};

server.use(session(sessionConfig));

server.use('/api', apiRouter);

module.exports = server;