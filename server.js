'use strict';

var Boom = require('boom'),
    handlebars = require('handlebars'),
    Hapi = require('hapi'),
    Path = require('path'),
    PG = require('pg'),
    Server = new Hapi.Server();

Server.connection({ port: process.env.PORT || 5000});

Server.start(function () {
    console.log('Server running at: ', Server.info.uri);
});

Server.views({
    engines: {
        html: handlebars
    },
    path: Path.join(__dirname, 'app')
});

Server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function (request, reply) {
        return reply.file('index.html');
    }
});
