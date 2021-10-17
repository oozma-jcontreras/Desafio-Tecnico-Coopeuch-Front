import React, { Component } from 'react';

class TaskRemoveComponent extends Component {
    render() {
        const removeTask = (event) => {
            console.log('FORM:');
        }
        const goBack = () => {
            this.props.history.push('/');
        }
        const { id } = this.props.location.state;
        return (
            <div className='form'>
                <p>¿Esta seguro que desea eliminar la tarea {id} ?</p>
                <input type='button' value='Guardar' onClick={removeTask} />
                <input type='button' value='Volver' onClick={goBack} />
            </div>
        );
    }
}

export default TaskRemoveComponent;