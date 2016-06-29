import {REFRESH, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/inventory';

const init = {
	products: [],
	fresh: false
}

const inventory = (state = init, action) => {
	switch(action.type){
		case  ADD_PRODUCT: return {...state, fresh: false}
		case  DELETE_PRODUCT: return {...state, fresh: false}
		case  REFRESH: return {...state, fresh: true, products: action.products}
		default :  return state;
	}
}

export default inventory;
