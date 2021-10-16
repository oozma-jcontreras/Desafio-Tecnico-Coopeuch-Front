import React from 'react'

const handleSubmit = (event) => {

}

const TaskFormComponent = (props) => {
    const [id, description, creationDate, active] = props.task;

    return (
        <form onSubmit={handleSubmit}>
            {id > 0 &&
                <label>ID:
                    <input type="number" name="ID" value={id} readOnly />
                </label>
            }
            <label>Descripción:
                <input type="text" name="description" value={description} />
            </label>
            <label>Fecha:
                <input type="date" name="creationDate" value={creationDate} />
            </label>
            <label>Es Activo:
                <input type="checkbox" name="active" value={active} />
            </label>
            <input type="submit">Guardar</input>
        </form>
    );
}