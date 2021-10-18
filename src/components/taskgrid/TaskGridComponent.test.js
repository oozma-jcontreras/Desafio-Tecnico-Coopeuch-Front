import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TaskGridComponent from './TaskGridComponent'
import { Provider } from "react-redux";
import store from '../../store';

test('renders button new task and table headers', function () {
    render(
        <Provider store={store}>
            <TaskGridComponent />
        </Provider>);
    expect(screen.queryByText('Nueva Tarea')).toBeInTheDocument();
    expect(screen.queryByText('ID')).toBeInTheDocument();
    expect(screen.queryByText('Descripción')).toBeInTheDocument();
    expect(screen.queryByText('Fecha Creación')).toBeInTheDocument();
    expect(screen.queryByText('Es Vigente')).toBeInTheDocument();
});