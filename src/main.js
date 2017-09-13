import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createFinalStore from './store';

import App from './containers/App';
import Skill from './pages/Skill';
import Career from './pages/Career';

import './main.css';

const store = createFinalStore();

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/skill" component={Skill} />
        <Route path="/career" component={Career} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
