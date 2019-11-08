import React, {Component} from 'react';
import '../assets/css/styles.css';
import img1 from '../assets/img/mawingu.png'

class Login extends Component{
  render(){
    return(
      <div className="mt-5 d-flex justify-content-center">
        <div className="mt-5 p-3 login-container shadow">
            <div classNameName="login-header">
                <img src={img1} alt="Mawingu Logo" />
                <h1 className="my-3">Admin Login</h1>
            </div>
            <div className="login-body">
                <form action="#" method="post">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-phone" aria-hidden="true"></i></span>
                        </div>
                        <input type="tel" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input type="password" className="form-control is-invalid" placeholder="Password" />
                        <div className="invalid-feedback">
                            Password is required
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
  }
}

export default Login;