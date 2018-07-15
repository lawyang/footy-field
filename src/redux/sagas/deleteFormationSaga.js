import { put, takeLatest, takeEvery, call, } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';
import axios from 'axios';
import FormationDisplay from '../../components/FormationDisplay/FormationDisplay';

function* deleteFormation(action) {
    try{
        yield call(axios.delete, '/api/footy/:id', action.payload);
        console.log('try DELETE');
    } catch (error) {
        console.log('Error POSTING', error);
    }
}

function* deleteFormationSaga() {
    yield takeLatest('DELETE_ELEMENT', deleteFormation)
}

export default deleteFormationSaga;