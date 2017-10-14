import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => (
  {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  }
);

export default {
  changeDrawerMenu,
};
