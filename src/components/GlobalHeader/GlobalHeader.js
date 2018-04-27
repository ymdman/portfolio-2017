import React from 'react';
import { ThreeBarsIcon } from 'react-octicons';

const GlobalHeader = props => (
  <header className="global-header">
    <h1 className="global-header__logo">
      <span className="global-header-logo-main">19790620</span>
      <span className="global-header-logo-sub">.com</span>
    </h1>
    <ThreeBarsIcon
      onClick={() => {
        props.actions.changeDrawerMenu();
      }}
      tabIndex="0"
      role="button"
      width="32"
      height="32"
      className="global-haeder__menu-button"
    />
  </header>
);

GlobalHeader.propTypes = {
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
  }),
};

GlobalHeader.defaultProps = {
  actions: {},
};

export default GlobalHeader;
