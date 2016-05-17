"use strict";

var api = {};

api.getNicole = () => {
	
	let data = {"name": "Nicole", "age": 21 };

	let promise = new Promise((resolve,reject) => {
		setTimeout(() => {resolve(data);},1000);
	});
return promise;
}

api.test = 1;
module.exports = api; 
