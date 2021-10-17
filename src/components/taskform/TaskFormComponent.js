import React, { Component } from 'react';
import './TaskFormComponent.css'

class TaskFormComponent extends Component {
    render() {
        const handleSubmit = (event) => {
            console.log('FORM:');
        }
        const goBack = () => {
            this.props.history.push('/');
        }
        const { id, description, creationDate, active } = this.props.location.state;
        return (
            <div className='form'>
                {id > 0 &&
                <>
                    <label>ID</label>
                    <input type="number" name="ID" value={id} readOnly />
                    </>
                }
                <label>Descripción</label>
                <input type="text" name="description" value={description} />
                <label>Fecha</label>
                <input type="date" name="creationDate" value={creationDate} />
                <label>Es Activo <input type="checkbox" name="active" value={active} /></label>
                <input type='button' value='Guardar' onClick={handleSubmit} />
                <input type='button' value='Volver' onClick={goBack} />
            </div>
        );
    }
}

export default TaskFormComponent;