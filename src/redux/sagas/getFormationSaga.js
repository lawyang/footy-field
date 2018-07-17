import { put, takeEvery, call, } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFormationStructure() {
    try{
        const formationStructure = yield call(axios.get, '/api/footy/formation');
        console.log( formationStructure)
        yield put({type: 'SET_STRUCTURE', payload: formationStructure.data})
        console.log( formationStructure.data)
    } catch (error) {
        console.log('Error fetching formationStructure', error);
    }
}

function* getFormationSaga() {
    yield takeEvery('FETCH_STRUCTURE', fetchFormationStructure)
}

export default getFormationSaga;