import React from 'react';

const MenuButton = props => (
  <div
    className="menu-button"
    onClick={() => {
      props.actions.changeDrawerMenu();
    }}
    tabIndex="0"
    role="button"
  >
    <div className="menu-button__top" />
    <div className="menu-button__center" />
    <div className="menu-button__bottom" />
  </div>
);

MenuButton.propTypes = {
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
  }),
};

MenuButton.defaultProps = {
  actions: {},
};

export default MenuButton;
