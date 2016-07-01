"use strict";

const Product  = require('./models/Product');
const Response = require('./Response');
let api = {};

const getProductData= (Product) => {
	return {
		'name'     : Product.attributes.name,
		'category' : Product.attributes.category_id,
		'quantity' : Product.attributes.cant,
		'maxPrice' : Product.attributes.price_max,
		'minPrice' : Product.attributes.price_min
	};
}

api.getProducts = () => {
	let promise  = new Promise( (resolve, reject) => {
		 Product.fetchAll().then( Products => {
		 		try {
		 			resolve(new Response(1, Products.map(getProductData), "Successful Product Fecth"));
		 		}
		 		catch(err){
		 			reject(new Response(1,{},'Error fetching data'));
		 		}
		 });
	});
	return promise;
}

module.exports = api;