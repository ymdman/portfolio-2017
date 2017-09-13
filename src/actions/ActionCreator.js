import { CHANGE_DRAWER_MENU } from '../constants/actionTypes';

const changeDrawerMenu = (stateDrawerMenu) => {
  const data = {
    type: CHANGE_DRAWER_MENU,
    stateDrawerMenu,
  };

  return data;
};

export default changeDrawerMenu;
