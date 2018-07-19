import { takeLatest, call, } from 'redux-saga/effects';
import axios from 'axios';

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