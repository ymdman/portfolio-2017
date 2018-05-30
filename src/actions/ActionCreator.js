import request from 'superagent';
import * as ActionTypes from '../constants/actionTypes';

const changeDrawerMenu = () => ({
  type: ActionTypes.CHANGE_DRAWER_MENU,
  drawerMenu: true,
});

const getWindowHeight = () => ({
  type: ActionTypes.WINDOW_HEIGHT,
  windowHeight: window.innerHeight,
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

const showSkillGraph = () => ({
  type: ActionTypes.SHOW_SKILL_GRAPH,
  skillGraph: {
    js: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#ffda3f', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
    node: {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ['#539e43', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
    html: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#e44d27', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
    css: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#1b72bb', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
    php: {
      datasets: [
        {
          data: [20, 80],
          backgroundColor: ['#767bb4', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
    design: {
      datasets: [
        {
          data: [60, 40],
          backgroundColor: ['#32c6f5', '#f5f5f5'],
          borderWidth: 0,
        },
      ],
    },
  },
});

export default {
  changeDrawerMenu,
  getWindowHeight,
  fetchPost,
  showModal,
  changeModalImage,
  showSkillGraph,
};
