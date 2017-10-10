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

    // console.log('fuga', this.props.contentType);
    // if (this.props.contentType === 'skill') {
    //   console.log('Skill');
    // } else if (this.props.contentType === 'about') {
    //   console.log('About');
    // } else if (this.props.contentType === 'career') {
    //   console.log('career');
    // }

    return (
      <div className="wrapper">
        <Sidebar
          sidebar={<DrawerMenu />}
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
  actions: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  currentState: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
