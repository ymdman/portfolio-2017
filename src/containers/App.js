import React from 'react';
import Sidebar from 'react-sidebar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../actions/ActionCreator';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.props.actions.changeDrawerMenu();
  }

  render() {
    const props = this.props;

    return (
      <div className="wrapper">
        <Sidebar
          sidebar={<DrawerMenu {...props} />}
          open={this.props.currentState.drawerMenu}
          onSetOpen={this.onSetSidebarOpen}
        >
          <GlobalHeader {...props} />
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
  actions: React.PropTypes.shape({
    changeDrawerMenu: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    drawerMenu: React.PropTypes.bool.isRequired,
  }),
};

App.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => (
  {
    currentState: state.Index,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(ActionCreator, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
