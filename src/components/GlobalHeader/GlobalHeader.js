import React from 'react';
import MenuButton from '../MenuButton/MenuButton';

const GlobalHeader = props => (
  <header className="global-header">
    <h1 className="global-header__logo">19790620.com</h1>
    <MenuButton {...props} />
  </header>
);

export default GlobalHeader;
