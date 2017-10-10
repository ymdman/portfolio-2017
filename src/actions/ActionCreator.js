import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = (fada) => {
  console.log(fada);
  const data = {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  };

  return data;
};


const changeContent = () => {
  const data = {
    type: ActionTypes.CONTENT_SKILL,
    contentType: 'skill',
  };

  return data;
};

export default { changeDrawerMenu, changeContent };
