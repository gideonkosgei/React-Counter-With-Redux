import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore}  from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'; // same as--> import allReducers from './reducers/index';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store ={store}>
        <App /> 
    </Provider>
    ,document.getElementById('root') 
    );
serviceWorker.unregister();
