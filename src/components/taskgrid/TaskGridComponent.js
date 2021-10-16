import React, { Component } from 'react'
import { findAll } from '../../services/TaskService';
import { connect } from 'react-redux';
import moment from 'moment';
import './TaskGridComponent.css';

const createOrUpdateTask = (id) => {
    console.log('UPDATE CLICK');
}

const removeTask = (id) => {
    console.log('REMOVE CLICK');
}

class TaskGridComponent extends Component {
    componentDidMount() {
        this.props.findAll();
    }

    render() {
        const {tasks} = this.props.tasks;
        return (
            <>
                <input type='button' value='Agregar Tarea' onClick={() => createOrUpdateTask(0)} />
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
                            return (<tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.description}</td>
                                <td>{moment(task.creationDate).format('MMMM Do YYYY')}</td>
                                <td>{task.active ? 'SI' : 'NO'}</td>
                                <td>
                                    <input type='button' value='Actualizar' onClick={() => createOrUpdateTask(task.id)} />
                                </td>
                                <td>
                                    <input type='button' value='Eliminar' onClick={() => removeTask(task.id)} />
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });
export default connect(mapStateToProps, { findAll })(TaskGridComponent);