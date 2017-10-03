import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoge: this.props.hoge,
      menuClick: this.props.menuClick,
      fuga: this.props.fuga,
    };
  }

  render() {
    return (
      <nav className="drawer-menu">
        <ul>
          <li><Link to="/" onClick={() => { this.state.hoge(); }}>About</Link></li>
          <li><Link to="/" onClick={() => { this.state.menuClick(); }}>Skill</Link></li>
          <li><Link to="/" onClick={() => { this.state.fuga(); }}>Career</Link></li>
        </ul>
      </nav>
    );
  }
}

DrawerMenu.propTypes = {
  hoge: React.PropTypes.func.isRequired,
  menuClick: React.PropTypes.func.isRequired,
  fuga: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.Index.drawerMenu,
    contentType: state.Index.contentType,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    hoge: () => {
      dispatch({ type: 'CHANGE_DRAWER_MENU' });
      dispatch({ type: 'CONTENT_ABOUT' });
    },

    menuClick: () => {
      dispatch({ type: 'CHANGE_DRAWER_MENU' });
      dispatch({ type: 'CONTENT_SKILL' });
    },

    fuga: () => {
      dispatch({ type: 'CHANGE_DRAWER_MENU' });
      dispatch({ type: 'CONTENT_CAREER' });
    },
  };

  return data;
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerMenu);
