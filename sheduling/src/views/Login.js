import React, { Component } from "react";
import "../assets/css/styles.css";
import img1 from "../assets/img/mawingu.png";
import validateInput from "./validations";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { loginAction } from "../redux/actions/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      errors: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();
        this.setState({errors: {}, isLoading: true});
        this.props.loginAction(this.state).then(
            (res)=> this.context.router.push('/tasks'),
            (err)=>this.setState({errors:err.data.errors})
        );
        
    
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { phone, errors, password } = this.state;
    console.log("phone", phone);
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="mt-5 p-3 login-container shadow">
          <div className="login-header">
            <img src={img1} alt="Mawingu Logo" />
            <h1 className="my-3">Admin Login</h1>
          </div>
          <div className="login-body">
            <form onSubmit={this.onSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  autoComplete="on"
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  id="phone"
                  name="phone"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  autoComplete="on"
                  name="password"
                  id="password"
                  type="password"
                  className="form-control is-invalid"
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <div className="invalid-feedback">Password is required</div>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes={
    loginAction: PropTypes.func.isRequired
}

Login.contextTypes={
    router: PropTypes.object.isRequired
}

export default connect(
  null,
  { loginAction }
)(Login);
