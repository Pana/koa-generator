'use strict'
let router = require('koa-router')()
let models = require('../models/index')
module.exports = router


router
.get('/books', function * (next) {
    let result = yield models.Book.findAndCountAll({}, {raw: true})
    yield this.render('index', {
        data: result
    })
})
.get('/books/:id', function * () {
    let book = yield models.Book.find(this.params.id, {raw: true})
    this.assert(book, 'Not found this book')
    yield this.render('bookDetail', {book: book})
})
.post('/books', function * () {
    let book = yield models.Book.create(this.request.body)
    this.redirect('/books')
})
.delete('/books/:id', function * () {

})
.put('/books/:id', function * () {

})
