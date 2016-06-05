"use strict";

let product = require('./models/product');
let api = {};

const getProductsData= (product) => {
	return {
		'name' : product.attributes.name,
		'category': product.attributes.category_id,
		'quantity' : product.attributes.cant,
		'MaxPrice' : product.attributes.price_max
	};
}

api.getProducts = () => {
	let response = {};
	let promise  = new Promise( (resolve, reject) => {
		 product.fetchAll().then( products => {
		 		try {
			 		response.data = products.map(getProductsData);
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


module.exports = api;