"use strict";

let api        = {};
const users    = require('./users');
const Response = require('./Response');

api.authenticate = (username, password) => {
	let promise = new Promise((resolve, reject) =>{
		users.getUserByUsername(username).then(usersResponse => {
			let code = 0;
			if(!usersResponse.data || usersResponse.data.length < 1)
				resolve(new Response(1,{code},"Failed Authenticating"))
			else {
				code = usersResponse.data[0].password == password;
				resolve(new Response(1,{code}, `Authentication : ${code}`))
			}
		}, usersResponse => reject(usersResponse));
	});
	return promise;
}

export default api;