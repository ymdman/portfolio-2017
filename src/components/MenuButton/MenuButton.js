import React from 'react';
import { connect } from 'react-redux';

const MenuButton = ({ menuButtonClick }) => (
  <div className="menu-button" onClick={() => { menuButtonClick(); }} tabIndex="0" role="button">
    <div className="menu-button__top" />
    <div className="menu-button__center" />
    <div className="menu-button__bottom" />
  </div>
);

MenuButton.propTypes = {
  menuButtonClick: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.ChangeDrawerMenu.drawerMenu,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    menuButtonClick: () => {
      dispatch({
        type: 'CHANGE_DRAWER_MENU',
      });
    },
  };

  return data;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuButton);
