import { put, takeEvery, call, } from 'redux-saga/effects';
import axios from 'axios';

function* getFormationId(action){
    try{
        const id = action.payload;        
        const formationId = yield call(axios.get, `/api/footy/update/${id}`);
        yield put({type: 'SET_ID', payload: formationId.data})        
    } catch (error) {
        console.log('Error fetching update ID', error); 
    }
}


function* getUpdatedIdSaga() {
    yield takeEvery('FETCH_UPDATE_ID', getFormationId)
}

export default getUpdatedIdSaga;