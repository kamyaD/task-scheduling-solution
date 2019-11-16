import React, { Component } from "react";
import "./App.css";
import Login from "./views/Login";
import Tasks from "./views/Tasks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import adminWraper from "./views/AdminWrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={props => {
              return (
                <adminWraper>
                  {this.props.auth.token ? <Tasks /> : <Login />}
                </adminWraper>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
