import React, { Component } from 'react';
import "./index.css";

class LogIn extends Component {
  render() {
    return (
      <div className="form">
      <div id="login">   
            <h1>Welcome Back!</h1>

            <form className='login'>
            
              <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input type="email" required autoComplete="false" id="login-email-input"/>
            </div>
            
            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="false" id="login-password-input"/>
            </div>
            
            <p className="forgot"><a href="#">Forgot Password?</a></p>
            
            <button type="submit" className="button button-block">Log In</button>
            
            </form>
  
          </div>
      </div>
    )
  }
}

export default LogIn;
