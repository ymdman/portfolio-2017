import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App/App';
// import About from './components/About/About';
// import Skill from './components/Skill/Skill';
// import Career from './components/Career/Career';
import './main.css';

import createFinalStore from './store';

const store = createFinalStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
