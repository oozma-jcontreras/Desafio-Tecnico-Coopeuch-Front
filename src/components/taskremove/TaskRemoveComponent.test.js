import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TaskRemoveComponent from './TaskRemoveComponent'
import { Provider } from "react-redux";
import store from '../../store';

test('renders text asking if you want to delete task with specific id', function () {
    const state = {
        id: 10
    };
    const routeComponentPropsMock = {
        history: {},
        location: {state},
        match: {},
      }
    render(
        <Provider store={store}>
            <TaskRemoveComponent {...routeComponentPropsMock} />
        </Provider>);
    expect(screen.queryByText('¿Esta seguro que desea eliminar la tarea 10 ?')).toBeInTheDocument();
});