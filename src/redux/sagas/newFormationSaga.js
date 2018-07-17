import { put, takeLatest, call, } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';
import axios from 'axios';
import newFormationForm from '../../components/NewFormation/NewFormationForm';

function* postFormation(action) {
    try{
        yield call(axios.post, '/api/footy', action.payload);
        console.log('try call post');
    } catch (error) {
        console.log('Error POSTING', error);
    }
}

function* newFormationSaga() {
    yield takeLatest('ADD_ELEMENT', postFormation)
}

export default newFormationSaga;