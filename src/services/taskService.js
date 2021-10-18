import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://localhost:8080/task',
  headers: {
    "Content-type": "application/json"
  }
});

const serviceFindAll = () => {
  return baseAxios.get('/all');
}

const serviceAddTask = (task) => async dispatch => {
  return baseAxios.put('/', task);
}

const serviceUpdateTask = (task) => async dispatch => {
  return baseAxios.post('/', task);
}

const serviceRemoveTask = (id) => async dispatch => {
  return baseAxios.delete('/' + id)
}

export { serviceFindAll, serviceAddTask, serviceUpdateTask, serviceRemoveTask }