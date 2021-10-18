import React, { Component } from 'react';
import './TaskFormComponent.css'
import { serviceAddTask, serviceUpdateTask } from '../../services/taskService';
import { connect } from 'react-redux';

class TaskFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.goBack = this.goBack.bind(this);

        const { id, description, active } = this.props.location.state;
        this.state = {
            id,
            description: description ? description : '',
            active
        };
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    onChangeActive(e) {
        this.setState({
            active: e.target.checked,
        });
    }

    saveTask() {
        const { id, description, active } = this.state;
        const task = {
            id,
            description,
            active
        };

        if (task.id > 0) {
            this.props.serviceUpdateTask(task).then((data) => {
                this.props.history.push('/');
            })
                .catch((e) => {
                    console.log('ERROR', e);
                });
        }
        else {
            this.props.serviceAddTask(task).then((data) => {
                this.props.history.push('/');
            })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    goBack() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='form'>
                {this.state.id > 0 &&
                    <>
                        <label>ID</label>
                        <input type="number" name="id" value={this.state.id} readOnly />
                    </>
                }
                <label>Descripción</label>
                <input type="text" name="description" value={this.state.description} onChange={this.onChangeDescription} />
                <label>Es Activo
                    <input type="checkbox" name="active" checked={this.state.active} onChange={this.onChangeActive} />
                </label>
                <input type='button' value='Guardar' onClick={this.saveTask} />
                <input type='button' value='Volver' onClick={this.goBack} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });
const mapDispatchToProps = {
    serviceAddTask,
    serviceUpdateTask
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormComponent);