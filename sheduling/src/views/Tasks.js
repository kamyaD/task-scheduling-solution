import React, { Component } from "react";
import "../assets/css/styles.css";
import Navigations from "./Navigations";
import Table from "./Table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { tasks } from "../store/Actions/authActions";
import API from "../utils/api";

class Task extends Component {
  async componentDidMount() {
    const result = await API.getTasks()
    this.props.getTasks(result)
      
  }
  render() {
    return [<Navigations />, <Table tasks={this.props.tasks} />];
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.reducers.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: data => dispatch(tasks(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Task));
