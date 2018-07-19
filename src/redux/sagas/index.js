import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import newFormationSaga from './newFormationSaga';
import deleteFormationSaga from './deleteFormationSaga';
import getFormationSaga from './getFormationSaga';
import getFormationDetailSaga from './getDetailSaga';
import getUpdatedIdSaga from './getUpdateIdSaga';
import addEditSaga from './addEditSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    newFormationSaga(),
    deleteFormationSaga(),
    getFormationSaga(),
    getFormationDetailSaga(),
    getUpdatedIdSaga(),
    addEditSaga(),
    // watchIncrementAsync()
  ]);
}
