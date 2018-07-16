import { put, takeLatest, takeEvery, call, } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';
import axios from 'axios';
import newFormationForm from '../../components/NewFormation/NewFormationForm';


function* fetchFormationStructure() {
    try{
        const formationStructure = yield call(axios.get, '/api/footy/formation');
        yield put( {
            type: 'SET_STRUCTURE', payload: formationStructure.data
        })
    } catch (error) {
        console.log('Error fetching formationStructure', error);
    }
}

function* getFormationSaga() {
    yield takeLatest ('FETCH_STRUCTURE', fetchFormationStructure)
}

export default fetchFormationStructure;