import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => (
  {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  }
);

const changeContentAbout = () => (
  {
    type: ActionTypes.CONTENT_ABOUT,
    contentType: 'about',
  }
);

const changeContentSkill = () => (
  {
    type: ActionTypes.CONTENT_SKILL,
    contentType: 'skill',
  }
);

const changeContentCareer = () => (
  {
    type: ActionTypes.CONTENT_CAREER,
    contentType: 'Career',
  }
);

export default {
  changeDrawerMenu,
  changeContentAbout,
  changeContentSkill,
  changeContentCareer,
};
