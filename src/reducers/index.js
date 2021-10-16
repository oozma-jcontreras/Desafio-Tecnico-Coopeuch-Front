import { combineReducers } from 'redux'
import TaskReducers from './taskReducers/TaskReducers'

const rootReducer = combineReducers({
  tasks: TaskReducers
});

export default rootReducer;