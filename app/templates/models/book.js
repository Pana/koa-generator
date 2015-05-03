'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Book', {
        name: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        tableName: 'books'
    })
}