import CHANGE_CONTENT from '../constants/ChangeContent';

const initialState = {
  about: true,
};

const changeContent = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CONTENT:
      return Object.assign({}, state, {
        about: false,
      });

    default:
      return state;
  }
};

export default changeContent;
