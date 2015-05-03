'use strict'
let fs = require('fs')
let path = require("path")
let basename = path.basename(module.filename)

module.exports = function (app) {
    fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
    })
    .forEach(function (file) {
        let router = require(path.join(__dirname, file))
        app.use(router.routes()).use(router.allowedMethods())
    })
}
