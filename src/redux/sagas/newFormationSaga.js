import { put, takeLatest, takeEvery, call, } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';
import axios from 'axios';


function* postFormation(action) {
    try{
        yield call(axios.post(), '/api/footy', action.payload);
        yield put( {type: 'FETCH_ELEMENTS'} );
    } catch (error) {
        console.log('Error POSTING', error);
    }
}

function* newFormationSaga() {
    yield takeLatest('ADD_ELEMENT', postFormation)

}

export default newFormationSaga;