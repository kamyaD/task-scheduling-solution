import React, { Component } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { withFormik } from "formik";

import Field from "./Field";
import "../assets/css/styles.css";
import img1 from "../assets/img/mawingu.png";
import * as authAction from "../store/Actions/authActions";

const fields = [
  {
    name: "phone",
    elementName: "input",
    type: "tel",
    placeholder: "Your Phone Number"
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your Password"
  }
];

class Login extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="mt-5 p-3 login-container shadow">
          <div className="login-header">
            <img src={img1} alt="Mawingu Logo" />
            <h1 className="my-3">Admin Login</h1>
          </div>
          <div className="login-form">
            <div className="row">
              <form onSubmit={
                e =>{
                  e.preventDefault();
                  this.props.login(this.props.values.phone, this.props.values.password);
                }
              }>
                {fields.map((f, i) => {
                  return (
                    <div className="col-md-12">
                      <Field
                        key={i}
                        {...f}
                        value={this.props.values[f.name]}
                        name={f.name}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[f.name]}
                        errors={this.props.errors[f.name]}
                      />
                    </div>
                  );
                })}
                <div className="col-md-12">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.reducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (phone, pass) => {
      dispatch(authAction.login(phone, pass));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      phone: "",
      password: ""
    }),
    validationSchema: Yup.object().shape({
      phone: Yup.string().required("You need to enter your Phone number"),
      password: Yup.string().required("You need to enter your password")
    })
  })(Login)
);
