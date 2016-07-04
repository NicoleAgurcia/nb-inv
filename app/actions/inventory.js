import inventoryApi from '../api/inventory'

export const FETCH_PRODUCTS  = 'FETCH_PRODUCTS';
export const ADD_PRODUCT     = 'ADD_PRODUCTS';
export const DELETE_PRODUCT  = 'DELETE_PRODUCT';
export const REFRESH         = 'REFRESH';
export const OPEN_INSPECT    = 'OPEN_INSPECT';
export const CLOSE_INSPECT   = 'CLOSE_INSPECT';

export function fetchProducts(){
  return dispatch => {
    inventoryApi.getProducts().then(response => {
        if(response.status)
            dispatch(refresh(response.data));
    });
  };
}

export function addProduct(product){
  return {
    type: ADD_PRODUCT,
    product
  }
}

export function deleteProduct(product){
  return {
    type: DELETE_PRODUCT,
    product
  }
}

export function refresh(products){
    return {
        type: REFRESH,
        products
    }
}

export function openInspectDialog(product){
  console.log('hello man', product);
  return {
    type: OPEN_INSPECT,
    product
  }
}

export function closeInspectDialog(){
  return {
    type: CLOSE_INSPECT
  }
}