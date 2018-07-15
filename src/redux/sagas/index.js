import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import newFormationSaga from './newFormationSaga';
import deleteFormationSaga from './deleteFormationSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    newFormationSaga(),
    deleteFormationSaga(),
    // watchIncrementAsync()
  ]);
}
