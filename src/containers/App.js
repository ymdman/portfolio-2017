import React from 'react';
import { connect } from 'react-redux';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';

const App = ({ drawerMenu, menuButtonClick }) => (
  <div className="wrapper">
    <GlobalHeader />
    <main>
      <button onClick={() => { menuButtonClick(); }}>button</button>
      <p>{console.log(drawerMenu)}</p>
    </main>
    <GlobalFooter />
  </div>
);

App.propTypes = {
  drawerMenu: React.PropTypes.bool.isRequired,
  menuButtonClick: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const data = {
    drawerMenu: state.ChangeDrawerMenu.drawerMenu,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    menuButtonClick: () => {
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
