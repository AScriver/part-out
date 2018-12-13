import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import NavbarFix from "../../components/NavbarFix";
import { Input, FormBtn, TextArea, DropDown } from "../../components/Form";
import "./index.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <NavbarFix />
        <div className="form">
          <div className="form-wrap">
            <form className="create-form">
              <div className="form-group">
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  type="text"
                  placeholder="Post Title"
                  id="title"
                  required
                />

                <TextArea
                  value={this.state.desc}
                  onChange={this.handleInputChange}
                  name="description"
                  type="text"
                  placeholder="Item Description..."
                  id="description"
                  required
                />

                <Input
                  value={this.state.itemImg}
                  onChange={this.handleInputChange}
                  name="itemImg"
                  type="text"
                  placeholder="Image Link"
                  id="itemImg"
                  required
                />

                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  type="text"
                  placeholder="Price"
                  id="price"
                  min="1"
                  max="100000"
                  required
                />

                <DropDown
                  value={this.state.year}
                  onChange={this.handleInputChange}
                  name="year"
                  id="year"
                  required>
                    <option>years</option>
                  </DropDown>

              </div>

              <button className="post-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
