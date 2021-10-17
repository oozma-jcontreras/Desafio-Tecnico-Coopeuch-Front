import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import TaskGridComponent from './components/taskgrid/TaskGridComponent';
import TaskFormComponent from './components/taskform/TaskFormComponent';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={TaskGridComponent}/>
          <Route path="/change" exact component={TaskFormComponent}/>
        </Switch>
    </div>
  );
}

export default App;
