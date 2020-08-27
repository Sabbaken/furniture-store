import {combineReducers} from 'redux';
import teacherReducer from "./teacherReducer";

export default combineReducers({
  teacher: teacherReducer,
});
