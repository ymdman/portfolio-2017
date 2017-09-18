import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

const DURATION = 300;

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={DURATION}
    classNames="drawer-menu"
  >
    {children}
  </CSSTransition>
);

const DrawerMenu = ({ drawerMenu }) => (
  <Fade in={drawerMenu}>
    <nav className="drawer-menu">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  </Fade>
);

Fade.propTypes = {
  children: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

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

