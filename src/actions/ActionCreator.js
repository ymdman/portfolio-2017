import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => (
  {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  }
);

const getWindowHeight = () => (
  {
    type: ActionTypes.WINDOW_HEIGHT,
    windowHeight: 0,
  }
);

export default {
  changeDrawerMenu,
  getWindowHeight,
};
