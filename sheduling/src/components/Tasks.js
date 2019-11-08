import React, {Component} from 'react';
import '../assets/css/styles.css';
import Navigations from '../components/Navigations';
import Table from '../components/Table';

class Task extends Component{
  render(){
    return(
      [<Navigations />,
      <Table />]
    );
  }
}

export default Task;