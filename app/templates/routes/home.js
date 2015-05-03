'use strict';
let router = require('koa-router')();
module.exports = router;

router
    .get('/', function*(next) {
        yield this.render('index', {})
    })
