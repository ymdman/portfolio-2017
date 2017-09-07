import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChangeContent from '../../actions/ChangeContent';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import About from '../../components/About/About';
import Skill from '../../components/Skill/Skill';
import Career from '../../components/Career/Career';

console.log(bindActionCreators, connect, ChangeContent);

const App = () => (
  <div className="wrapper">
    <GlobalHeader />
    <mian>
      <About />
      <Skill />
      <Career />
    </mian>
    <GlobalFooter />
  </div>
);

export default App;
