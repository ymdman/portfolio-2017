import { CHANGE_DRAWER_MENU } from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
};

const changeDrawerMenu = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_MENU:
      return {
        drawerMenu: !state.drawerMenu,
      };

    default:
      return state;
  }
};

export default changeDrawerMenu;
