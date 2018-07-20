import {combineReducers } from 'redux';

const getDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log('handling set DETAIL', action.payload);
            return [...action.payload]
        default:
            return state; 
    }
};

const getIdDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ID':
            console.log('handling set_id', action.payload);
            return [...action.payload]
        default:
            return state;
    }
}

export default combineReducers({
    getDetailReducer,
    getIdDetailReducer
});