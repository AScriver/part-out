import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import NavbarFix from '../../components/NavbarFix';
import "./index.css";

class SignUp extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <NavbarFix />
        <div className="form">
        <div className="form-wrap">
          <form className="create-form">
      
            <div className="form-group">
              <label className="cap-title" for="title">Submit a Post:</label>
              <input type="text" id="title" name="title" placeholder="Post Title" required/>
              <textarea type="text" id="body" name="body" rows="10" cols="30" placeholder="Post Content..."></textarea>
            </div>
      
            <button className="post-submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default SignUp;