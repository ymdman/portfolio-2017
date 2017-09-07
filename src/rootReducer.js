import { combineReducers } from 'redux';
import changeContent from './reducers/ChangeContent';

const rootReducer = combineReducers({
  changeContent,
});

export default rootReducer;
