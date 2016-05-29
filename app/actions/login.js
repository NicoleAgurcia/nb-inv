import loginApi from '../api/login'

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const WAIT_AUTHENTICATION = 'WAIT_AUTHENTICATION';
export const HALT_WAIT = 'HALT_WAIT';

export function logIn(username) {
  return {
    type: LOG_IN,
    username
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}

export function waitAuthentication(username, password){
	return{
		type: WAIT_AUTHENTICATION,
		username,
		password
	}
}

export function haltWait(response){
	return{
		type: HALT_WAIT,
		response
	}
}

export function authenticate(username = '', password = '') {
  return dispatch => {
    loginApi.authenticate(username,password).then(response => {
    	if(response.data.code)
    		dispatch(logIn(username));
    	dispatch(haltWait(response));
    }, (response) => dispatch(haltWait(response)));
  };
}

