import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createFinalStore from './store';

import App from './containers/App';

import './main.css';

const store = createFinalStore();

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/skill" component={App} />
        <Route path="/career" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
