import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './TaskGrid.css';

const updateTask = (id) => {
    console.log('UPDATE CLICK');
}

const removeTask = (id) => {
    console.log('REMOVE CLICK');
}

const TaskGrid = () => {
    const dispatch = useDispatch();
    const tasks = useEffect(() => dispatch({ type: 'FIND_ALL' }), [dispatch]);
    console.log('TASKS......', tasks);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Fecha Creación</th>
                    <th>Es Vigente</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tasks && tasks.map(task => {
                    return (<tr>
                        <td>{task.id}</td>
                        <td>{task.description}</td>
                        <td>{task.creationDate}</td>
                        <td>{task.active ? 'SI' : 'NO'}</td>
                        <td>
                            <input type='button' onClick={() => updateTask(task.id)}>Actualizar</input>
                        </td>
                        <td>
                            <input type='button' onClick={() => removeTask(task.id)}>Eliminar</input>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}

export default TaskGrid;