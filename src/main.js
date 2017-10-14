import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createFinalStore from './store';

import App from './containers/App';

import './main.css';

const store = createFinalStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
