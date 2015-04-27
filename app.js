'use strict'
let koa = require('koa')
let app = koa()
let setRoutes = require('./routes')
let serve = require('koa-static')
let error = require('koa-error')
let logger = require('koa-logger')
let sequelize = require('./models').sequelize
let koaBody = require('koa-body')
let koaQs = require('koa-qs')
let gzip = require('koa-gzip')
let session = require('koa-session')

// sync schema
sequelize.sync()
app.use(gzip())
app.use(serve('./public'))
app.keys = ['koa application']
app.use(session(app))
koaQs(app) // nested querysting support
app.use(koaBody({formidable:{uploadDir: __dirname}}))
app.use(logger())
app.use(error())
setRoutes(app)

module.exports = app