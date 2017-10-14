import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DRAWER_MENU:
      return Object.assign({}, state, {
        drawerMenu: !state.drawerMenu,
      });

    default:
      return state;
  }
};

export default reducer;
