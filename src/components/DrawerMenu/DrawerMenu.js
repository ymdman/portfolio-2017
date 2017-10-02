import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DrawerMenu = ({ menuClick }) => (
  <nav className="drawer-menu">
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/" onClick={() => { menuClick(); }}>Skill</Link></li>
      <li><Link to="/career">Career</Link></li>
    </ul>
  </nav>
);

// Move.propTypes = {
//   children: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
// };

// DrawerMenu.propTypes = {
//   drawerMenu: React.PropTypes.bool.isRequired,
// };

DrawerMenu.propTypes = {
  menuClick: React.PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.ChangeDrawerMenu.drawerMenu,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    menuClick: () => {
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
)(DrawerMenu);

// export default DrawerMenu;

