import React, { Component } from 'react';
import moment from 'moment';
import { serviceRemoveTask } from '../../services/TaskService';
import { connect } from 'react-redux';

class TaskRemoveComponent extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.goBack = this.goBack.bind(this);

        const { id, description, creationDate, active } = this.props.location.state;
        this.state = {
            id,
            description: description ? description : '',
            creationDate: moment(creationDate).format('YYYY-MM-DD'),
            active
        };
    }

    removeTask() {
        const { id, description, creationDate, active } = this.state;
        const task = {
            id,
            description,
            creationDate: moment(creationDate).format('YYYY-MM-DD'),
            active
        };
        this.props.removeTask(task).then((data) => {
            this.props.history.push('/');
        })
            .catch((e) => {
                console.log('ERROR', e);
            });
    }

    goBack() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='form'>
                <p>¿Esta seguro que desea eliminar la tarea {this.state.id} ?</p>
                <input type='button' value='Guardar' onClick={this.removeTask} />
                <input type='button' value='Volver' onClick={this.goBack} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });
export default connect(mapStateToProps, serviceRemoveTask)(TaskRemoveComponent);