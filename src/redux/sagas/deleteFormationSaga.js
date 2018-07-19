import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

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