import React from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

class Career extends React.Component {
  constructor(props) {
    super(props);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.props.overRayClick();
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          sidebar={<DrawerMenu />}
          open={this.props.drawerMenu}
          onSetOpen={this.onSetSidebarOpen}
        >
          <GlobalHeader />
          <main>
            <p>Career</p>
          </main>
          <GlobalFooter />
        </Sidebar>
      </div>
    );
  }
}

Career.propTypes = {
  drawerMenu: React.PropTypes.bool.isRequired,
  overRayClick: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.ChangeDrawerMenu.drawerMenu,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    overRayClick: () => {
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
)(Career);
