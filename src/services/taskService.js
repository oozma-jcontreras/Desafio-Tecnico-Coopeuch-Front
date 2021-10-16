import axios from 'axios';
import { FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK, TASK_ACTION_ERROR } from '../types';

const baseAxios = axios.create({
  baseURL: `http://localhost:8080/task`
});

const findAll = () => async dispatch => {
  try {
    console.log('llamando servicio XXXX');
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

export { findAll }