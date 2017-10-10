import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => (
  {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  }
);

const changeContent = () => (
  {
    type: ActionTypes.CONTENT_SKILL,
    contentType: 'skill',
  }
);

export default { changeDrawerMenu, changeContent };
