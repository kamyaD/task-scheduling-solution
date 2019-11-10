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
                        <th>Task id</th>
                        <th>Customer id</th>
                        <th>Personel id</th>
                        <th>Task status id</th>
                        <th>Created by</th>
                        <th>Created</th>
                        <th>modified by</th>
                        <th>Last modified</th>
                        <th>In progress</th>
                        <th>Completed</th>
                        <th>Deffered</th>
                        <th>Customer first name</th>
                        <th>Customer last name</th>
                        <th>Customer city</th>
                        <th>Customer username</th>
                        <th>Inserted</th>
                        <th>Personnel first name</th>
                        <th>Personnel other name</th>
                        <th>Personnel phone</th>
                        <th>Task status name</th>
                        <th>Customer location</th>
                        <th>Customer gender</th>
                        <th>Customer age</th>
                        <th>Customer access code</th>
                        <th>Customer splash page</th>
                        <th>Customer mpesa</th>
                        <th>Customer autoplay</th>
                        <th>Customer comments</th>
                        <th>Customer updated</th>
                        <th>Customer updated by</th>
                        <th>AgentId</th>
                        <th>CustomerId</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
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
