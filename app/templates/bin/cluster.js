#!/usr/bin/env node
'use strict';
let debug = require('debug')('koa');
let cluster = require('cluster');
let numCPUs = require('os').cpus().length;
let app = require('../app');
const CONFIG = require('../config.json');
let port = process.env.PORT || CONFIG.port || 3000;
let sequelize = require('../models').sequelize;

if (cluster.isMaster) {
    sequelize.sync();
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        debug('worker ' + worker.process.pid + ' died');
    })
} else {
    let server = app.listen(port);
    debug('Koa server listening on port ' + port);
}
