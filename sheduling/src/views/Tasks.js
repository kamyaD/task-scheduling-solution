import React, {Component} from 'react';
import '../assets/css/styles.css';
import Navigations from './Navigations';
import Table from './Table';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Task extends Component{
  render(){
    return(
      [<Navigations />,
      <Table />]
    );
  }
}

const mapStateToProps= state =>{
  return {
    auth: state.auth
  }
}

const mapDispatchToProps= dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Task));