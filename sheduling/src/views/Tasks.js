import React, {Component} from 'react';
import '../assets/css/styles.css';
import Navigations from './Navigations';
import Table from './Table';

class Task extends Component{
  render(){
    return(
      [<Navigations />,
      <Table />]
    );
  }
}

export default Task;