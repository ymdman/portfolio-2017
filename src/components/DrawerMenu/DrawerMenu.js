import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

const DURATION = 300;
const DEFAULT_STYLE = {
  transition: `opacity ${DURATION}ms ease-in-out`,
  opacity: 0,
};

const DrawerMenu = ({ drawerMenu }) => (
  <CSSTransition timeout={DURATION} style={DEFAULT_STYLE}>
    <nav className="drawer-menu">
      <p>{console.log(drawerMenu)}</p>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  </CSSTransition>
);

DrawerMenu.propTypes = {
  drawerMenu: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.ChangeDrawerMenu.drawerMenu,
  };

  return data;
};

export default connect(
  mapStateToProps,
)(DrawerMenu);

