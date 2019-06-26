import isLoggedreducer from './isLogged';
import counterReducer from './counter';
import {combineReducers}  from 'redux';
 
const rootReducer = combineReducers ({
    counter : counterReducer,
    isLogged : isLoggedreducer
});


/*
The above code can be replaced with the one below
It means they will have the same name

i.e 

counterReducer : counterReducer,
isLoggedreducer : isLoggedreducer

const rootReducer = combineReducers ({
    counter,
    isLogged 
});


*/

export default rootReducer;