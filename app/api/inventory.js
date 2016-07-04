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
			reject(new Response(0,{},'Error fetching data'));
			}
		});
	});
return promise;
}


api.insertProducts = (data) => {
	let response = {};
	let promise  = new Promise( (resolve, reject) => {

	Product.forge({
		category_id: data.category_id,
		name: 		 data.name,
		cant: 		 data.cat,   
		date:        data.date,
		description: data.description,
		price_min:   data.price_min ,  
		price_max:   data.price_max
	}).save().then( products => {
		try {
			resolve(new Response(1,data,"Successful Product Save"));
		}
		catch(err){
			reject(new Response(0,{},'Error saving data'));
		}
		});
	});
return promise;
}

api.deleteProducts = (id) => {
	let promise  = new Promise( (resolve, reject) => {
		Product.where(id).destroy().then( Products => {
			try {
			resolve(new Response(1,id, "Successful Product Removed"));
			}
			catch(err){
			reject(new Response(0,{},'Error removing data'));
			}
		});
	});
return promise;
}


module.exports = api;