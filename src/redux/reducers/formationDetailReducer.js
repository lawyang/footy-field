import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const getStructureReducer = (state = [], action) => {
    console.log('in getStructureReducer');
    switch (action.type) {
        case 'SET_STRUCTURE':
            console.log('handling set structure');
            console.log(action.payload);
            return[...action.payload];
        default:
            // console.log('getstructureReducer not working');
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