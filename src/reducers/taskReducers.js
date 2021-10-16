import initialState from './initialState';
import {findAll} from '../services/taskService';

const initialState = {
    tasks: [],
    IdSelectedTask: 0
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ALL':
            findAll().then((data) => {
                state.tasks = data;
            }).catch((error) => {
                console.log('ERROR', error);
            });
          return state.tasks;
        case 'ADD_TASK':
          return state - 1
        case 'UPDATE_TASK':
          return 0
        case 'REMOVE_TASK':
          return 0
        default:
          return state
      }
}

export default taskReducers;