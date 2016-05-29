import {WAIT_AUTHENTICATION, LOG_IN, LOG_OUT, HALT_WAIT } from '../actions/login';

const init = {
	loggedIn: false,
	user:"",
	waitingAuth: false
}

const login = (state = init, action) => {
	switch(action.type){
		case LOG_IN  : return state.loggedIn ? state : {...state,loggedIn:true, user:action.username}
		case LOG_OUT : return {init};
		case WAIT_AUTHENTICATION : return state.loggedIn ? state : {...state,waitingAuth: true};
		case HALT_WAIT : return {...state, waitingAuth:false};
		default :  return state;
	}
}

export default login;
