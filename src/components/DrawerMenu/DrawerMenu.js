import React from 'react';
import { Link } from 'react-router-dom';

const DrawerMenu = props => (
  <nav className="drawer-menu">
    <ul>
      <li>
        <Link
          to="/"
          onClick={() => {
            props.actions.changeDrawerMenu();
            props.actions.changeContentAbout();
          }}
        >
        About
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => {
            props.actions.changeDrawerMenu();
            props.actions.changeContentSkill();
          }}
        >
        Skill
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => {
            props.actions.changeDrawerMenu();
            props.actions.changeContentCareer();
          }}
        >
        Career
        </Link>
      </li>
    </ul>
  </nav>
);

DrawerMenu.propTypes = {
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
    changeContentAbout: React.PropTypes.func.isRequired,
    changeContentSkill: React.PropTypes.func.isRequired,
    changeContentCareer: React.PropTypes.func.isRequired,
  }),
};

DrawerMenu.defaultProps = {
  actions: {},
};

export default DrawerMenu;
