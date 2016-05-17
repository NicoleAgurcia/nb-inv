import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import login from './login';

const rootReducer = combineReducers({
  counter,
  login,
  routing
});

export default rootReducer;
