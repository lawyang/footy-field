import { put, takeEvery, call, } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFormationDetail() {
    console.log('in detail saga');
    try{
        const formationDetail = yield call(axios.get, 'api/footy/formation');
        yield put({type: 'SET_DETAIL', payload: formationDetail.data})
        console.log("this is formation Details:", formationDetail); 
    } catch (error) {
        console.log('Error fetching formation details', error);
    }
}

function* getFormationDetailSaga() {
    yield takeEvery('FETCH_DETAIL', fetchFormationDetail)
}

export default getFormationDetailSaga