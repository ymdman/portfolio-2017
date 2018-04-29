import React from 'react';
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
    this.setSidebarStyles = this.setSidebarStyles.bind(this);
  }

  onSetSidebarOpen() {
    this.props.actions.changeDrawerMenu();
  }

  setSidebarStyles() {
    if (this.props.currentState.showModal) {
      setTimeout(() => {
        sidebarStyles.root.overflow = 'hidden';
        sidebarStyles.content.overflowY = 'scroll';
      }, 0);

      return sidebarStyles;
    }

    sidebarStyles.root.overflow = 'visible';
    sidebarStyles.content.overflowY = 'visible';

    return sidebarStyles;
  }

  render() {
    const props = this.props;

    return (
      <BrowserRouter>
        <div className="l-wrapper">
          <ScrollMemory />
          <Sidebar
            sidebar={<DrawerMenu {...props} />}
            open={props.currentState.drawerMenu}
            onSetOpen={this.onSetSidebarOpen}
            styles={this.setSidebarStyles()}
          >
            <GlobalHeader {...props} />
            <main className="l-main">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <ContentAbout {...props} />}
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
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    drawerMenu: React.PropTypes.bool.isRequired,
    showModal: React.PropTypes.bool.isRequired,
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
