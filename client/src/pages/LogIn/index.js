import React, { Component } from 'react';
import { connect } from "react-redux";
import { Input, FormBtn } from "../../components/Form";
import API from '../../utils/API';
import { signinReq, signoutReq } from "../../state/auth/actions";
import {withRouter} from 'react-router'
import "./index.css";

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      authenticated: null,
      err: ""
    }
  
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.signin({
      username: this.state.username,
      password: this.state.password
    }).then(resp => {
      console.log(resp);
      if (resp.status === 200){
        //this onlt fires when the user is authenticated.
        console.log("updating state")
        this.setState({
          authenticated: true,
          username: resp.data.username
        });
        
        this.props.signin(
          this.state.username, 
          this.state.authenticated
        );

        const {history} = this.props;
        history.push('/')

      } else {
        this.setState({
          err: "Incorrect username or password."
        })
      }
      
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
                this.handleFormSubmit;
                
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



// these need to some from the server somehow
// authenticated is props.authenticated
//gets store
const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

// updates store
function mapDispatchToProps(dispatch){
  return {
    signin(username, authenticated) {
      dispatch(signinReq({
        username: username,
        authenticated: authenticated
      }));
    },
    logoutButton(){
      dispatch(signoutReq());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
