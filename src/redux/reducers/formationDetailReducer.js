import {combineReducers } from 'redux';

const getStructureReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STRUCTURE':
            console.log('handling set structure', action.payload);
            return [...action.payload]
            // return state.structure = action.payload;
        default:
            // console.log('getstructureReducer not working');
            return state;
            
    }

};

export default combineReducers({
    getStructureReducer
});