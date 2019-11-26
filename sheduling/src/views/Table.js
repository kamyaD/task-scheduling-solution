import React, { Component } from "react";
import "../assets/css/styles.css";

class Table extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tasks</h5>
                <div class="table-responsive">
                  <table class="table table-bordered table-striped table-condensed">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Customer first name</th>
                        <th>Customer Last Name</th>
                        <th>Personnel first Name</th>
                        <th>Personnel Other Name</th>
                        <th>Agent Id</th>
                        <th>Assigned</th>
                        <th>In Progress</th>
                        <th>Completed</th>
                        <th>Deffered</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Access Code</th>
                        <th>Splash Page</th>
                        <th>Mpesa</th>
                        <th>Autoplay</th>
                        <th>Comments</th>
                        <th>Registration</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.tasks.map((task, i)=>{
                        return(
                          <tr>
                        <td>{task.id}</td>
                        <td>{task.customer_first_name}</td>
                        <td>{task.customer_last_name}</td>
                        <td>{task.personnel_first_name}</td>
                        <td>{task.personnel_other_name}</td>
                        <td>{task.agentId}</td>
                        <td>{task.assigned}</td>
                        <td>{task.in_progress}</td>
                        <td>{task.completed}</td>
                        <td>{task.deferred}</td>
                        <td>{task.status}</td>
                        <td>{task.location}</td>
                        <td>{task.gender}</td>
                        <td>{task.age}</td>
                        <td>{task.access_code}</td>
                        <td>{task.splash_page}</td>
                        <td>{task.mpesa}</td>
                        <td>{task.autoplay}</td>
                        <td>{task.comments}</td>
                        <td>{task.registration}</td>
                        <td>{task.createdAt}</td>
                        <td>{task.updatedAt}</td>
                      </tr>
                        )
                      })}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
