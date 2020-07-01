import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Application from './app';
import reducer from './reducers/reducer';

import './styles.scss';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  rootElement,
);
