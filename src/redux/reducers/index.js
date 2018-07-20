import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getStructureReducer from './formationDetailReducer';
import getIdDetailReducer from './detailReducer';
import getDetailReducer from './detailReducer';

const store = combineReducers({
  user,
  login,
  getStructureReducer,
  getDetailReducer,
  getIdDetailReducer
});

export default store;
