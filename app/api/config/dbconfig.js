//secret file not exposed
const credentials = require('./credentials');

const knex  = require('knex')({
	client: 'mysql',
	connection : credentials
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;