import request from 'superagent';
import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => ({
  type: ActionTypes.CHANGE_DRAWER_MENU,
  drawerMenu: true,
});

const getWindowHeight = () => ({
  type: ActionTypes.WINDOW_HEIGHT,
  windowHeight: 0,
});

const postRequest = () => ({
  type: ActionTypes.POST_REQUSET,
});

const postSucces = careerData => ({
  type: ActionTypes.POST_SUCCESS,
  careerData,
});

const postFailure = () => ({
  type: ActionTypes.POST_FAILURE,
});

const fetchPost = () => dispatch => {
  dispatch(postRequest());

  request
    .get('./data/_career.json')
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err) {
        dispatch(postFailure());
      } else {
        dispatch(postSucces(res.body));
      }
    });
};

const showModal = modalContent => ({
  type: ActionTypes.SHOW_MODAL,
  modalContent,
});

export default {
  changeDrawerMenu,
  getWindowHeight,
  fetchPost,
  showModal,
};
