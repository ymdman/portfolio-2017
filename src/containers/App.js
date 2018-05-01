import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import ActionCreator from '../actions/ActionCreator';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import ContentAbout from '../components/ContentAbout/ContentAbout';
import ContentSkill from '../components/ContentSkill/ContentSkill';
import ContentWorks from '../components/ContentWorks/ContentWorks';

const sidebarStyles = {
  root: {
    overflow: 'visible',
  },

  content: {
    overflowY: 'visible',
  },

  sidebar: {
    zIndex: 300,
    position: 'fixed',
  },

  overlay: {
    zIndex: 200,
  },
};

class App extends React.Component {
  constructor() {
    super();

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.props.actions.changeDrawerMenu();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="l-wrapper">
          <ScrollMemory />
          <Sidebar
            sidebar={<DrawerMenu {...this.props} />}
            open={this.props.currentState.drawerMenu}
            onSetOpen={this.onSetSidebarOpen}
            styles={sidebarStyles}
          >
            <GlobalHeader {...this.props} />
            <main className="l-main">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <ContentAbout {...this.props} />}
                />
                <Route path="/skill" component={ContentSkill} />
                <Route path="/works" component={ContentWorks} />
              </Switch>
            </main>
            <GlobalFooter />
          </Sidebar>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    changeDrawerMenu: PropTypes.func.isRequired,
  }),
  currentState: PropTypes.shape({
    drawerMenu: PropTypes.bool.isRequired,
    isVisibleModal: PropTypes.bool.isRequired,
  }),
};

App.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
