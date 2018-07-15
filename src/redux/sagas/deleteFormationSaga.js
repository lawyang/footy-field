import { put, takeLatest, takeEvery, call, } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';
import axios from 'axios';
import FormationDisplay from '../../components/FormationDisplay/FormationDisplay';

function* deleteFormation(action) {
    try{
        const id = action.payload;
        console.log('try DELETE', action.payload);
        yield call(axios.delete, `/api/footy/${id}`, action.payload);
    } catch (error) {
        console.log('Error Deleting', error);
    }
}

function* deleteFormationSaga() {
    yield takeLatest('DELETE_ELEMENT', deleteFormation)
}

export default deleteFormationSaga;