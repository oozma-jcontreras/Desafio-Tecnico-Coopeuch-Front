import {FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK } from '../../types';

const initialState = {
    tasks: [],
    message: ''
}

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_TASKS:
          return {
              ...state,
              tasks:action.payload,
              message:''
            };
        case ADD_TASK:
          return {
            ...state,
            tasks:[...state.tasks, action.payload],
            message:''
          };
        case UPDATE_TASK:
          return {
            ...state,
            tasks:[...state.tasks.filter((item) => item.id !== action.payload.id), action.payload],
            message:''
          };
        case REMOVE_TASK:
          return {
            ...state,
            message: action.payload
          };
        default:
          return state
      }
}

export default taskReducers;