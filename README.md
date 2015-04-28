## koa yeoman generator

## Useage

Because koa require generator so you should use iojs or nodejs > 0.12 with harmony flag opend.
We recommend use iojs, in code we use a lot ES6 feature

* let + const
* promise
* generator
* for of
* template string


### Models

use sequelize for models layer, which support most sql db, default use sqlite3.
If you want to use mongodb, you can choose your favorite mongodb ORM driver which should be promise base.


## middlewares

* logger   https://github.com/koajs/logger
* view    https://github.com/queckezz/koa-views   https://github.com/koajs/ejs
* static files   https://github.com/koajs/static
* router    https://github.com/alexmingoia/koa-router
* model     sequelize
* error handler   https://github.com/koajs/error
* session & cookie    https://github.com/koajs/session   https://github.com/koajs/generic-session
* params    koa-body,   koa-qs
