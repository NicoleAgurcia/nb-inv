"use strict";

const User = require('./models/User');
const Response = require('./Response');
const api = {};

const getUserData = (user) => {
	return {
		'username' : user.attributes.name,
		'email'    : user.attributes.email,
		'password' : user.attributes.password,
		'id'       : user.attributes.user_id
	};
}

api.getUsers = () => {
	let promise  = new Promise( (resolve, reject) => {
		 User.fetchAll().then( users => {
		 		try{
		 			resolve(new Response(1,users.map(getUserData),'Fetch user list successful'));
		 		}
		 		catch(err){
		 			reject(new Response(0,{},'Error fetching data'));
		 		}
		 });
	});
	return promise;
}

api.getUserByEmail = (email) => {
	let response = {};
	let promise  = new Promise( (resolve, reject) => {
		api.getUsers().then(usersResponse => {
			let filtered = usersResponse.data.filter(user => user.email == email)
			resolve(new Response(1,filtered,'Fetch user by email successful'));
		}).catch(response => reject(usersResponse));
	});
	return promise;
}

api.getUserByUsername = (username) => {
	let promise  = new Promise( (resolve, reject) => {
		api.getUsers().then(usersResponse => {
			let filtered = usersResponse.data.filter(user => user.username == username)
			resolve(new Response(1, filtered, "Fetch user by username successful"));
		}).catch(response => reject(usersResponse));
	});
	return promise;
}

module.exports = api;