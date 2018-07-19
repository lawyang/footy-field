import { put, takeEvery, call, } from 'redux-saga/effects';
import axios from 'axios';

function* getFormationId(){
    console.log('in get formation ID');    
    try{
        const formationId = yield call(axios.get, 'api/footy/update');
        yield put({type: 'SET_ID', payload: formationId.data})
        console.log('get formation ID', formationId.data);
    } catch (error) {
        console.log('Error fetching update ID', error); 
    }
}


function* getUpdatedIdSaga() {
    yield takeEvery('FETCH_UPDATE_ID', getFormationId)
}

export default getUpdatedIdSaga;