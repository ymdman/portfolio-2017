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
    console.log('aaa', this);
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

// App.propTypes = {
//   piyo: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
//   hoge: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
// };

const mapStateToProps = (state) => {
  const data = {
    hoge: state.Index,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    piyo: bindActionCreators(ActionCreator, dispatch),
  };

  return data;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
