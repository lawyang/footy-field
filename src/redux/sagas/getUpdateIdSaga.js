import { put, takeEvery, call, } from 'redux-saga/effects';
import axios from 'axios';

function* getFormationId(action){
    console.log('in get formation ID');    
    try{
        console.log('payload:', action.payload)
        const id = action.payload;
        console.log(id);
        
        // const formationId = yield call(axios.get, 'api/footy/update');
        // const formationId = yield call(axios.get, 'api/footy/update');
        const formationId = yield call(axios.get, `/api/footy/update/${id}`);
        // yield put({type: 'SET_ID', payload: formationId.data})
        console.log('get formation ID', formationId.data);
    } catch (error) {
        console.log('Error fetching update ID', error); 
    }
}


function* getUpdatedIdSaga() {
    yield takeEvery('FETCH_UPDATE_ID', getFormationId)
}

export default getUpdatedIdSaga;