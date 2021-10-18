import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TaskFormComponent from './TaskFormComponent'
import { Provider } from "react-redux";
import store from '../../store';

test('renders labels', function () {
    const state = {
        id: 10,
        description: '',
        active: true
    };
    const routeComponentPropsMock = {
        history: {},
        location: {state},
        match: {},
      }
    render(
        <Provider store={store}>
            <TaskFormComponent {...routeComponentPropsMock} />
        </Provider>);
    expect(screen.queryByText('ID')).toBeInTheDocument();
    expect(screen.queryByText('Descripción')).toBeInTheDocument();
    expect(screen.queryByText('Es Vigente')).toBeInTheDocument();
});