import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';

import Reducers from './reducers';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reduxPromise from 'redux-promise';

const createAQuran = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createAQuran(Reducers)}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
