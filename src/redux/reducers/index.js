import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getStructureReducer from './formationDetailReducer';


const store = combineReducers({
  user,
  login,
  getStructureReducer,

});

export default store;
