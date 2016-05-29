"use strict";

let User = require('./models/User');
let api = {};

const getUserData = (user) => {
	return {
		'username' : user.attributes.name,
		'email' : user.attributes.email,
		'password': user.attributes.password,
		'id' : user.attributes.user_id
	};
}

api.getUsers = () => {
	let response = {};
	let promise  = new Promise( (resolve, reject) => {
		 User.fetchAll().then( users => {
		 		try {
			 		response.data = users.map(getUserData);
		 			response.status = 1;
		 			resolve(response);
		 		}
		 		catch(err){
		 			response.status = 0;
		 			response.message= 'Error fetching data';
		 			reject(response);
		 		}
		 });
	});
	return promise;
}

api.getUserByEmail = (email) => {

	let response = {};
	let promise  = new Promise( (resolve, reject) => {
		api.getUsers().then(usersResponse => {
			response.data = usersResponse.data.filter(user => user.email == email)
			response.status = 1;
			resolve(response);
		}).catch(response => reject(response));
	});
	return promise;
}

api.getUserByUsername = (username) => {

	let response = {};
	let promise  = new Promise( (resolve, reject) => {
		api.getUsers().then(usersResponse => {
			response.data = usersResponse.data.filter(user => user.username == username)
			response.status = 1;
			resolve(response);
		});
	});
	return promise;
}


module.exports = api;