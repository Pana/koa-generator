'use strict'
let router = require('koa-router')()
module.exports = router


router
.get('/', function * (next) {
    this.body = 'hello koa generator'
})
