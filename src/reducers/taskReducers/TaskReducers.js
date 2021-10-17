import {FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK, TASK_ACTION_ERROR, SELECT_TASK} from '../../types';

const initialState = {
    tasks: [],
    selectedTask: {},
    loading: true,
    message: ''
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_TASKS:
          return {
              ...state,
              tasks:action.payload,
              loading:false,
              message:''
            };
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload
              };
        case ADD_TASK:
          return {
            ...state,
            tasks:[...state.tasks, action.payload],
            loading:false,
            message:''
          };
        case UPDATE_TASK:
          return {
            ...state,
            tasks:[...state.tasks.filter((item) => item.id !== action.payload.id), action.payload],
            loading:false,
            message:''
          };
        case REMOVE_TASK:
          return {
            ...state,
            loading:false,
            message: action.payload
          };
        case TASK_ACTION_ERROR:
          return {
            ...state,
            loading: false,
            message: action.payload
          };
        default:
          return state
      }
}

export default taskReducers;