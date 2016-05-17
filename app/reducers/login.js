import { LOG_IN, LOG_OUT } from '../actions/login';

const init = {loggedIn: false, user:""}

const login = (state = init, action) => {
	switch(action.type){
		case LOG_IN  : return state.loggedIn ? state : {...state,loggedIn:true, user:action.username}
		case LOG_OUT : return {loggedIn:false, user:""};
		default :  return state;
	}
}

export default login;
