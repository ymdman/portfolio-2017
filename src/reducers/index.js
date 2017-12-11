import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
  windowHeight: 0,
  response: false,
  postSucces: false,
  postFailure: false,
  careerData: [],
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

    case ActionTypes.POST_REQUSET:
      return Object.assign({}, state, {
        response: true,
        postSucces: false,
        postFailure: false,
      });

    case ActionTypes.POST_SUCCESS:
      return Object.assign({}, state, {
        response: false,
        postSucces: true,
        postFailure: false,
        careerData: action.careerData,
      });

    case ActionTypes.POST_FAILURE:
      return Object.assign({}, state, {
        response: false,
        postSucces: false,
        postFailure: true,
      });

    default:
      return state;
  }
};

export default reducer;
