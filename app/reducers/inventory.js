import {REFRESH, ADD_PRODUCT, DELETE_PRODUCT, OPEN_INSPECT, CLOSE_INSPECT } from '../actions/inventory';

const init = {
	products: [],
	fresh: false,
	inspect : false,
	focused : {}
}

const inventory = (state = init, action) => {
	switch(action.type){
		case ADD_PRODUCT: return {...state, fresh: false}
		case DELETE_PRODUCT: return {...state, fresh: false}
		case REFRESH: return {...state, fresh: true, products: action.products}
		case OPEN_INSPECT: return {...state, inspect: true, focused : action.product}
		case CLOSE_INSPECT: return {...state, inspect: false, focused: {}}
		default :  return state;
	}
}

export default inventory;
