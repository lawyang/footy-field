import { put, takeLatest, call, } from 'redux-saga/effects';
import axios from 'axios';

function* postEdit(action) {
    try{
        yield call(axios.put, '/api/footy/edit', action.payload);
        console.log('try call post');
    } catch (error) {
        console.log('Error POSTING', error);
    }
}

function* addEditSaga() {
    yield takeLatest('ADD_EDIT', postEdit)
}

export default addEditSaga;