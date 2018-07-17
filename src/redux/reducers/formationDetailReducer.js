import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const getStructureReducer = (state = [], action) => {
    console.log('in getStructureReducer');
    switch (action.type) {
        case 'SET_STRUCTURE':
            console.log('handling set structure', action.payload);
            return [...action.payload]
            // return state.structure = action.payload;
        default:
            // console.log('getstructureReducer not working');
            console.log(state);
            return state;
            
    }

};

// const storeInstance = createStore(
//     combineReducers({
//         getStructureReducer,
//     }),
//     applyMiddleware(logger),
// );

export default combineReducers({
    getStructureReducer
});