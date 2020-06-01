import {combineReducers} from 'redux';
import user from './user';
import interests from './interests';
import skills from './skills';

export default combineReducers({
  user,
  interests,
  skills,
});
