'use strict'
let koa = require('koa');
let app = koa();
let setRoutes = require('./routes');
let serve = require('koa-static');
let error = require('koa-error');
let logger = require('koa-logger');
let koaBody = require('koa-body');
let koaQs = require('koa-qs');
let gzip = require('koa-gzip');
let session = require('koa-session');
let render = require('koa-ejs');
let path = require('path');
let helmet = require('koa-helmet');
let methodOverride = require('koa-methodoverride');

app.use(error());
app.use(gzip());
app.use(serve('./public'));
app.keys = ['koa application'];
app.use(session(app));
koaQs(app); // nested querysting support
app.use(koaBody({
    formidable: {
        uploadDir: path.join(__dirname, 'public')
    }
}));
app.use(helmet.defaults());
// load template middleware
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true,
    filters: {}
});
app.use(logger());
setRoutes(app);

module.exports = app;
