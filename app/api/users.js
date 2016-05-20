
"use strict";

const mysql      = require('mysql');
const credentials = require('./credentials');

// {
// 	host : 'localhost',
// 	user : 'root',
// 	password : '*********',
// 	database : '**********'
// }

let api = {};
api.getUsers = () => {

	let connection = mysql.createConnection(credentials);
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
		 	return {username : row.name, email: row.email, id: row.user_id}
		 });
		 resolve(response);
		 connection.end();

		});
	});
	return promise;
}

api.getUserByEmail = (email) => {
	email = typeof email !== 'undefined' ? email : "";
	let connection = mysql.createConnection(credentials);
	connection.connect();

	let promise = new Promise((resolve, reject) => {

		connection.query(' SELECT * FROM nb_inventory.users where email = "' + email + '"' , (err, rows, fields) => {
		let response = {};
		 if (err || email == ""){

		 	response.status = -1;
		 	response.message = email == "" ? "No email provided" : err;
		 	reject(response);
		 }else{
		 	response.status = 1;
		 	response.data = rows.map(row => {
		 		return {username : row.name, email: row.email, id: row.user_id}
		 	});
		 	resolve(response);
		 }
		 connection.end();
		});
	});
	return promise;
}

module.exports = api;
