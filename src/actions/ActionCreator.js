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

const postSucces = worksData => ({
  type: ActionTypes.POST_SUCCESS,
  worksData,
});

const postFailure = () => ({
  type: ActionTypes.POST_FAILURE,
});

const fetchPost = () => dispatch => {
  dispatch(postRequest());

  request
    .get('./data/_works.json')
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

const changeModalImage = modalImage => ({
  type: ActionTypes.CHANGE_MODAL_IMAGE,
  modalImage,
});

export default {
  changeDrawerMenu,
  getWindowHeight,
  fetchPost,
  showModal,
  changeModalImage,
};
