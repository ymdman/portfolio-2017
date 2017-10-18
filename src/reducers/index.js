import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
  windowHeight: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DRAWER_MENU:
      return Object.assign({}, state, {
        drawerMenu: !state.drawerMenu,
      });

    case ActionTypes.WINDOW_HEIGHT:
      return Object.assign({}, state, {
        windowHeight: window.innerHeight,
      });

    default:
      return state;
  }
};

export default reducer;
