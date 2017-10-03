import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = (stateDrawerMenu) => {
  console.log('fdafa');
  const data = {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    stateDrawerMenu,
  };

  return data;
};

// const changeContent = (fuga) => {
//   const data = {
//     type: ActionTypes.CONTENT_SKILL,
//     contentType: fuga,
//   };

//   return data;
// };

export default { changeDrawerMenu, changeContent };
