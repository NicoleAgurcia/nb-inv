"use strict";

const mysql      = require('mysql');
let api = {};
api.getUsers = () => {

	let connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '21251122',
	  database : 'BNR'
	});
	connection.connect();
	let promise = new Promise((resolve, reject) => {
		connection.query('select * from users', (err, rows, fields) => {
		let response = {};


		 if (err){
		 	response.status = -1;
		 	response.message = err;
		 	reject(response);
		 }
		 response.status = 1;
		 response.data = rows.map(row => {
		 	return {username : row.name, email: row.email, id: row.use_id}
		 });
		 resolve(response);
		 connection.end();

		});
	});
	return promise;
}

module.exports = api;
