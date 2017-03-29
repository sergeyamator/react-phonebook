import { combineReducers } from 'redux';
import contacts from './contacts';
import filter from './filter';
import viewStyle from './viewStyle';

export default combineReducers({
  contacts,
  filter,
  viewStyle
});