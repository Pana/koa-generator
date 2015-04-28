'use strict'
let router = require('koa-router')()
let models = require('../models/index')
module.exports = router

router
    .get('/books', function*(next) {
        let result = yield models.Book.findAndCountAll({}, {
            raw: true
        })
        yield this.render('books', {
            data: result
        })
    })
    .get('/books/new', function*() {
        yield this.render('/bookNew')
    })
    .get('/books/:id/edit', function*() {
        let book = yield models.Book.find(this.params.id, {
            raw: true
        })
        this.assert(book, 'Not found this book')
        yield this.render('bookEdit', {
            book: book
        })
    })
    .get('/books/:id', function*() {
        let book = yield models.Book.find(this.params.id, {
            raw: true
        })
        this.assert(book, 'Not found this book')
        yield this.render('bookDetail', {
            book: book
        })
    })
    .post('/books', function*() {
        let book = yield models.Book.create(this.request.body)
        this.redirect('/books')
    })
    .delete('/books/:id', function*() {
        let result = yield models.Book.destroy({where: {id: this.params.id}})
        console.log(result)
        this.redirect('/books')
    })
    .put('/books/:id', function*() {
        let result = yield models.Book.update(this.request.body, {where: {id: this.params.id}})
        this.redirect('/books')
    })
