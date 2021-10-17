import axios from 'axios';
import { FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK, TASK_ACTION_ERROR } from '../types';

const baseAxios = axios.create({
  baseURL: `http://localhost:8080/task`
});

const findAll = () => async dispatch => {
  try {
    const response = await baseAxios.get('/all');
    dispatch({
      type: FIND_ALL_TASKS,
      payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: TASK_ACTION_ERROR,
      payload: console.log(e),
    })
  }
}

const addTask = (task) => async dispatch => {
  try {
    console.log('llamando servicio ADD_TASK');
    const response = await baseAxios.put('/', task);
    dispatch({
      type: ADD_TASK,
      payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: TASK_ACTION_ERROR,
      payload: console.log(e),
    })
  }
}

const updateTask = (task) => async dispatch => {
  try {
    console.log('llamando servicio UPDATE_TASK');
    const response = await baseAxios.post('/', task);
    dispatch({
      type: UPDATE_TASK,
      payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: TASK_ACTION_ERROR,
      payload: console.log(e),
    })
  }
}

const removeTask = (task) => async dispatch => {
  try {
    console.log('llamando servicio REMOVE_TASK');
    const response = await baseAxios.delete('/', task);
    dispatch({
      type: REMOVE_TASK,
      payload: response.data
    })
  }
  catch (e) {
    dispatch({
      type: REMOVE_TASK,
      payload: console.log(e),
    })
  }
}

export { findAll, addTask, updateTask, removeTask }