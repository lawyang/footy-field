import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const getStructureReducer = (state = [], action) => {
    console.log('hieeelo',action.payload);
    if(action.type === 'SET_STRUCTURE'){
        state = action.payload
        console.log(state);
    } else {
        console.log(action.payload);
    return state;
}
    // switch (action.type) {
    //     case 'SET_STRUCTURE':
    //         console.log('hieeelo',action.payload);
    //         return action.payload;
    //     default:
    //         return state;
    // }
};

const storeInstance = createStore(
    combineReducers({
        getStructureReducer,
    }),
    applyMiddleware(logger),
);

export default getStructureReducer;