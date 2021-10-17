import React, { Component } from 'react';
import './TaskFormComponent.css'
import { addTask, updateTask } from '../../services/TaskService';
import { connect } from 'react-redux';
import moment from 'moment';

class TaskFormComponent extends Component {
    
    constructor() {
        super();
        this.state = {
            id, 
            description, 
            creationDate: moment(creationDate).format('YYYY-MM-DD'),
            active
        };
    }

    render() {
        const { id, description, creationDate, active } = this.props.location.state;
        this.setState({ id, description, creationDate, active });
        const handleSubmit = (event) => {
            console.log(this.props.location.state);
        }
        const goBack = () => {
            this.props.history.push('/');
        }
        const onInputchange = (event) => {
            this.setState({
              [event.target.name]: event.target.value
            });
          }
        
        return (
            <div className='form'>
                {this.state.id > 0 &&
                <>
                    <label>ID</label>
                    <input type="number" name="id" value={this.state.id} readOnly />
                    </>
                }
                <label>Descripción</label>
                <input type="text" name="description" value={this.state.description} />
                <label>Fecha</label>
                <input type="date" name="creationDate" value={this.state.creationDate} />
                <label>Es Activo <input type="checkbox" name="active" value={this.state.active} /></label>
                <input type='button' value='Guardar' onClick={handleSubmit} />
                <input type='button' value='Volver' onClick={goBack} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ selectedTask: state.selectedTask });
const mapDispatchToProps = {
    addTask, 
    updateTask
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormComponent);