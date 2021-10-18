import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import TaskGridComponent from './components/taskgrid/TaskGridComponent';
import TaskFormComponent from './components/taskform/TaskFormComponent';
import TaskRemoveComponent from './components/taskremove/TaskRemoveComponent';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={TaskGridComponent} />
          <Route path="/change" exact component={TaskFormComponent} />
          <Route path="/remove" exact component={TaskRemoveComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
