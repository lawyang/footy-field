import {combineReducers } from 'redux';

const getDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log('handling set DETAIL', action.payload);
            return [...action.payload]
            // return state.structure = action.payload;
        default:
            // console.log('getstructureReducer not working');
            return state; 
    }
};

export default combineReducers({
    getDetailReducer
});