import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import App from './App';

import './index.css';

const thunkMiddleware = thunk;

const logger = createLogger;

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <App /> 
    </Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.