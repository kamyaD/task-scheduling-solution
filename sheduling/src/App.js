import React from "react";
import "./App.css";
import Login from "./views/Login";
import Tasks from "./views/Tasks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
