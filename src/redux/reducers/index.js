import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getStructureReducer from './formationDetailReducer';
import getDetailReducer from './detailReducer';

const store = combineReducers({
  user,
  login,
  getStructureReducer,
  getDetailReducer
});

export default store;
