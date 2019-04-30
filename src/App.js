import React from 'react';
import './App.css';
import { Button, ButtonGroup, Card} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pomodoroHome from "./pomodoroHome";
import pomodoroSettings from "./pomodoroSettings";
import history from "./history,js"

function toHome(e) {
    e.preventDefault();
    window.location = '/';
}

function toSettings(e) {
    e.preventDefault();
    window.location = '/settings';
}

function App() {
  return <div className="App">
      <Router>
    <header className="App-header">
        <ButtonGroup>
            <Button onClick={toHome}>Home</Button>
            <Button onClick={toSettings}>Settings</Button>
        </ButtonGroup>
    </header>

        <div >
            <Route exact path="/" component={pomodoroHome} />
            <Route path="/settings" component={pomodoroSettings} />

        </div>
      </Router>
  </div>;
}

export default App;
