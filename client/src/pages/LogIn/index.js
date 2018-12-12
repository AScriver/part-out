import React, { Component } from 'react';
import { connect } from "react-redux";
import { Input, FormBtn } from "../../components/Form";
import API from '../../utils/API';
import { signin, signout } from "../../state/auth/actions";
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
      window.location.replace(resp.data);
    }).catch(function (error) {
      console.log(error);
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

              <FormBtn
              className="button button-block"
              onClick={(e)=>{
                e.preventDefault();
                this.props.signinButton();
              }}>Signin Mock</FormBtn>

              <FormBtn
              className="button button-block"
              onClick={(e) => {
                e.preventDefault();
                this.props.logoutButton();
              }}
              >Logout Mock</FormBtn>
            
            </form>
  
          </div>
      </div>
    )
  }
}


// authenticated is props.authenticated
const mapStateToProps = state => {
  return {
    authenticated: state.auth.signin
  };
};

function mapDispatchToProps(dispatch){
  return {
    signinButton() {
      dispatch(signin({
        user: {
          name: "Austin"
        },
        token: "token!!!!"
      }));
    },
    logoutButton(){
      dispatch(signout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
