import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form";
import API from '../../utils/API';
import "./index.css";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    err: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.login({
      username: this.state.username,
      password: this.state.password
    }).then(resp => {
      // console.log(resp);
      window.location.replace(resp.data)
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }


  render() {
    return (
      <div className="form">
      <div id="login">   
            <h1>Welcome Back!</h1>

            <form className='login'>
            
              <div className="field-wrap">
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                type="text"
                placeholder="Username (Required)"
                required
              />
            </div>
            
            <div className="field-wrap">
            <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (Required)"
                autoComplete="false"
                required
              />
            </div>
            
            <p className="forgot"><a href="#">Forgot Password?</a></p>
            
            <FormBtn
              className="button button-block"
              disabled={!(this.state.password && this.state.username)}
              onClick={this.handleFormSubmit}
              >Sign Up</FormBtn>
            
            </form>
  
          </div>
      </div>
    )
  }
}

export default LogIn;
