import { FIND_ALL_TASKS, ADD_TASK, UPDATE_TASK, REMOVE_TASK } from '../types';
import { serviceFindAll, serviceAddTask, serviceUpdateTask, serviceRemoveTask } from "../services/taskService";

const findAll = () => async dispatch => {
    try {
        const response = await serviceFindAll();
        dispatch({
            type: FIND_ALL_TASKS,
            payload: response.data,
        });
    }
    catch (exception) {
        console.log(exception);
    }
};

const addTask = (task) => async dispatch => {
    try {
        const response = await serviceAddTask(task);
        dispatch({
            type: ADD_TASK,
            payload: response.data,
        });
        return Promise.resolve(response.data);
    }
    catch (exception) {
        return Promise.reject(exception);
    }
};

const updateTask = (task) => async dispatch => {
    try {
        console.log('1');
        const response = await serviceUpdateTask(task);
        console.log(response);
        dispatch({
            type: UPDATE_TASK,
            payload: response.data,
        });
        return Promise.resolve(response.data);
    }
    catch (exception) {
        return Promise.reject(exception);
    }
};

const removeTask = (id) => async dispatch => {
    try {
        const response = await serviceRemoveTask(id);
        dispatch({
            type: REMOVE_TASK,
            payload: response.data,
        });
    }
    catch (exception) {
        console.log(exception);
    }
};

export { findAll, addTask, updateTask, removeTask }