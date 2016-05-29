"use strict";

let api = {};
const users = require('./users');
const Response = require('./Response');

api.authenticate = (username, password) => {
	let response = new Response();
	response.data.code = 0;

	let promise = new Promise((resolve, reject) =>{
		users.getUserByUsername(username).then(usersResponse => {

			if(!usersResponse.data || usersResponse.data.length < 1)
				resolve(response)
			else {
				if(usersResponse.data[0].password == password)
					response.data.code = 1;
				response.status = 1;
				resolve(response)
			}

		}, usersResponse => reject(usersResponse));
	});
	return promise;
}

export default api;