import React from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.props.overRayClick();
  }

  render() {
    console.log('fuga', this.props.contentType);
    if (this.props.contentType === 'skill') {
      console.log('Skill');
    } else if (this.props.contentType === 'about') {
      console.log('About');
    } else if (this.props.contentType === 'career') {
      console.log('career');
    }

    return (
      <div className="wrapper">
        <Sidebar
          sidebar={<DrawerMenu />}
          open={this.props.drawerMenu}
          onSetOpen={this.onSetSidebarOpen}
        >
          <GlobalHeader />
          <main>
            <p>lorem</p>
          </main>
          <GlobalFooter />
        </Sidebar>
      </div>
    );
  }
}

App.propTypes = {
  drawerMenu: React.PropTypes.bool.isRequired,
  contentType: React.PropTypes.string.isRequired,
  overRayClick: React.PropTypes.func.isRequired,
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
)(App);

