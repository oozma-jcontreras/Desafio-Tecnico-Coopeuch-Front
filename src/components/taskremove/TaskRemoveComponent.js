import React, { Component } from 'react';
import { serviceRemoveTask } from '../../services/taskService';
import { connect } from 'react-redux';

class TaskRemoveComponent extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.goBack = this.goBack.bind(this);

        const { id } = this.props.location.state;
        this.state = {
            id
        };
    }

    removeTask() {
        const { id } = this.state;
        this.props.serviceRemoveTask(id).then((data) => {
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
                <input type='button' value='Eliminar' onClick={this.removeTask} />
                <input type='button' value='Volver' onClick={this.goBack} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });
const mapDispatchToProps = {
    serviceRemoveTask
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskRemoveComponent);