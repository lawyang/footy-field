import {combineReducers } from 'redux';

const getDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return [...action.payload]
        default:
            return state; 
    }
};

const getIdDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ID':
            return [...action.payload]
        default:
            return state;
    }
}

export default combineReducers({
    getDetailReducer,
    getIdDetailReducer
});