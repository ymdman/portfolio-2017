import React from 'react';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Career from '../Career/Career';

const App = () => (
  <div className="wrapper">
    <GlobalHeader title="hoge" />
    <mian>
      <About />
      <Skill />
      <Career />
    </mian>
    <GlobalFooter />
  </div>
);

export default App;
