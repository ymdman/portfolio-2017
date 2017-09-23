import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const DrawerMenu = () => (
  <nav className="drawer-menu">
    <ul>
      <li><Link to="/">About</Link></li>
      <li>Skill</li>
      <li>Career</li>
    </ul>
  </nav>
);

// Move.propTypes = {
//   children: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
// };

// DrawerMenu.propTypes = {
//   drawerMenu: React.PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => {
//   const data = {
//     drawerMenu: state.ChangeDrawerMenu.drawerMenu,
//   };

//   return data;
// };

// export default connect(
//   mapStateToProps,
// )(DrawerMenu);

export default DrawerMenu;

