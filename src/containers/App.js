import React from 'react';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

const App = () => (
  <div className="wrapper">
    <DrawerMenu />
    <GlobalHeader />
    <main>
      <p>lorem</p>
    </main>
    <GlobalFooter />
  </div>
);

export default App;
