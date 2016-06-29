import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import login from './login';
import inventory from './inventory';

const rootReducer = combineReducers({
  counter,
  login,
  inventory,
  routing
});

export default rootReducer;
