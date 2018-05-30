import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  drawerMenu: false,
  windowHeight: window.innerHeight,
  response: false,
  postSucces: false,
  postFailure: false,
  worksData: [],
  isVisibleModal: false,
  modalContent: {
    siteName: '',
    image: [],
    description: '',
    url: '',
    charge: '',
    experience: '',
    other: '',
  },
  modalImage: {
    src: '',
    alt: '',
  },
  skillGraph: {
    js: {
      datasets: [],
    },
    node: {
      datasets: [],
    },
    html: {
      datasets: [],
    },
    css: {
      datasets: [],
    },
    php: {
      datasets: [],
    },
    design: {
      datasets: [],
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DRAWER_MENU:
      return Object.assign({}, state, {
        drawerMenu: !state.drawerMenu,
      });

    case ActionTypes.WINDOW_HEIGHT:
      return Object.assign({}, state, {
        windowHeight: action.windowHeight,
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
        worksData: action.worksData,
      });

    case ActionTypes.POST_FAILURE:
      return Object.assign({}, state, {
        response: false,
        postSucces: false,
        postFailure: true,
        worksData: action.worksData,
      });

    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        isVisibleModal: !state.isVisibleModal,
        modalContent: action.modalContent,
      });

    case ActionTypes.CHANGE_MODAL_IMAGE:
      return Object.assign({}, state, {
        modalImage: {
          src: action.modalImage.src,
          alt: action.modalImage.alt,
        },
      });

    case ActionTypes.SHOW_SKILL_GRAPH:
      return Object.assign({}, state, {
        skillGraph: action.skillGraph,
      });

    default:
      return state;
  }
};

export default reducer;
