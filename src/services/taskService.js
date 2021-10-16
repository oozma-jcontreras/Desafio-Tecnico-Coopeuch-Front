import axios from 'axios';

const baseAxios = axios.create({
    baseURL: `http://localhost:8080/task`
  });
const findAll = () => {
    return baseAxios.get('/all');
}

export {findAll}