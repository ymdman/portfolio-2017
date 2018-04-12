import React from 'react';
import MenuButton from '../MenuButton/MenuButton';

const GlobalHeader = props => (
  <header className="global-header">
    <h1 className="global-header-logo">
      <span className="global-header-logo__main">19790620</span>
      <span className="global-header-logo__sub">.com</span>
    </h1>
    <MenuButton {...props} />
  </header>
);

export default GlobalHeader;
