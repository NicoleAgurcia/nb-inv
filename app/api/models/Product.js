"use strict "
const bookshelf = require('../config/dbconfig');
const product = bookshelf.Model.extend({
  tableName: 'products'
});

module.exports = product;