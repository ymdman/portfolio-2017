import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const createFinalStore = () => {
  const finalCreateStore = compose(applyMiddleware(ReduxThunk))(createStore);
  return finalCreateStore(rootReducer);
};

export default createFinalStore;
