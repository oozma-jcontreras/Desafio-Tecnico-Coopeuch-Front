import {FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK} from '../../types';

const initialState = {
    tasks: [],
    selectedTask: {},
    loading:true
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_TASKS:
          return {
              ...state,
              tasks:action.payload,
              loading:false
            };
        case ADD_TASK:
          return state - 1
        case UPDATE_TASK:
          return 0
        case REMOVE_TASK:
          return 0
        default:
          return state
      }
}

export default taskReducers;