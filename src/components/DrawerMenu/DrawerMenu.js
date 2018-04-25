import React from 'react';
import { Link } from 'react-router-dom';

const DrawerMenu = props => (
  <nav className="drawer-menu">
    <h2 className="drawer-menu__title">MENU</h2>
    <ul className="drawer-menu__list">
      <li>
        <Link
          to="/"
          onClick={() => {
            props.actions.changeDrawerMenu();
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/skill"
          onClick={() => {
            props.actions.changeDrawerMenu();
          }}
        >
          Skill
        </Link>
      </li>
      <li>
        <Link
          to="/works"
          onClick={() => {
            props.actions.changeDrawerMenu();
          }}
        >
          Works
        </Link>
      </li>
    </ul>
  </nav>
);

DrawerMenu.propTypes = {
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
  }),
};

DrawerMenu.defaultProps = {
  actions: {},
};

export default DrawerMenu;
