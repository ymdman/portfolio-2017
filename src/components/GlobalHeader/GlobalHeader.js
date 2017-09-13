import React from 'react';

import MenuButton from '../MenuButton/MenuButton';
import DrawerMenu from '../DrawerMenu/DrawerMenu';

const GlobalHeader = () => (
  <header className="global-header">
    <h1 className="global-header__logo">Kazuhiro Yamada</h1>
    <MenuButton />
    <DrawerMenu />
  </header>
);

export default GlobalHeader;
