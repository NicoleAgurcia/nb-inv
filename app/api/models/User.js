"use strict";
const bookshelf = require('../config/dbconfig');
const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;