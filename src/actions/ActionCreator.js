import request from 'superagent';
import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => (
  {
    type: ActionTypes.CHANGE_DRAWER_MENU,
    drawerMenu: true,
  }
);

const getWindowHeight = () => (
  {
    type: ActionTypes.WINDOW_HEIGHT,
    windowHeight: 0,
  }
);

const postRequest = () => (
  {
    type: ActionTypes.POST_REQUSET,
  }
);

const postSucces = careerData => (
  {
    type: ActionTypes.POST_SUCCESS,
    postSucces: true,
    careerData,
  }
);

const postFailure = () => (
  {
    type: ActionTypes.POST_FAILURE,
    postFailure: true,
  }
);

const fetchPost = () => (
  (dispatch) => {
    dispatch(postRequest());

    request
      .get('./data/career.json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(postFailure(err));
        } else {
          dispatch(postSucces(res.body));
        }
      });
  }
);

export default {
  changeDrawerMenu,
  getWindowHeight,
  fetchPost,
};
