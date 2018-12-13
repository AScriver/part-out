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
                  type="number"
                  placeholder="Price"
                  id="price"
                  min="1"
                  max="100000"
                  required
                />

                <Input
                  value={this.state.carYear}
                  onChange={this.handleInputChange}
                  name="carYear"
                  type="number"
                  placeholder="Year"
                  id="carYear"
                  min="1990"
                  max="2025"
                  required
                />

                <Input
                  value={this.state.carMake}
                  onChange={this.handleInputChange}
                  name="carMake"
                  type="text"
                  placeholder="Manufacturer"
                  id="carMake"
                  required
                />

                <Input
                  value={this.state.carModel}
                  onChange={this.handleInputChange}
                  name="carModel"
                  type="text"
                  placeholder="Model"
                  id="carModel"
                  required
                />

                <Input
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  name="location"
                  type="text"
                  placeholder="Location"
                  id="location"
                  required
                />

                <DropDown
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  type="text"
                  id="catecory"
                >
                  <option>category</option>
                </DropDown>
              </div>
              <FormBtn
                type="submit"
                className="button button-block"
                onClick={e => {
                  e.preventDefault();
                  this.props.logoutButton();
                }}
              >
                Submit
              </FormBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
