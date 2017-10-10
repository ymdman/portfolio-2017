import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
  contentType: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DRAWER_MENU:
      return Object.assign({}, state, {
        drawerMenu: !state.drawerMenu,
      });

    case ActionTypes.CONTENT_ABOUT:
      return Object.assign({}, state, {
        contentType: 'about',
      });

    case ActionTypes.CONTENT_SKILL:
      return Object.assign({}, state, {
        contentType: 'skill',
      });

    case ActionTypes.CONTENT_CAREER:
      return Object.assign({}, state, {
        contentType: 'career',
      });

    default:
      return state;
  }
};

export default reducer;
