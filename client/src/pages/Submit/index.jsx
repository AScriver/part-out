import React, { Component } from "react";
import { Input, FormBtn, TextArea, DropDown } from "../../components/Form";
import "./index.css";
import API from "../../utils/API";

class Submit extends Component {
  state = {
    title: '',
    desc: '',
    itemImg: '',
    price: 0,
    carYear: 0,
    carMake: '',
    carModel: '',
    location: '',
    category: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    API.createPost({
      title: this.state.title,
      desc: this.state.desc,
      itemImg: this.state.itemImg,
      price: this.state.price,
      carYear: this.state.carYear,
      carMake: this.state.carMake,
      carModel: this.state.carModel,
      location: this.state.location,
      category: this.state.category
    }).then(resp => {
      console.log(resp.data);
    }).catch(function (error) {
      console.log(error.response);
    });
  }


  render() {
    return (
      <div>
        <div className="form">
          <div className="form-wrap">
            <form className="create-form">
              <div className="form-group">
                <div className="field-wrap">
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    type="text"
                    placeholder="Post Title"
                    id="title"
                    required
                  />
                </div>
                <div className="field-wrap">
                  <TextArea
                    value={this.state.desc}
                    onChange={this.handleInputChange}
                    name="desc"
                    type="text"
                    placeholder="Item Description..."
                    id="desc"
                    required
                  />
                </div>
                <div className="field-wrap">
                  <Input
                    value={this.state.itemImg}
                    onChange={this.handleInputChange}
                    name="itemImg"
                    type="text"
                    placeholder="Image Link"
                    id="itemImg"
                    required
                  />
                </div>
                <div className="field-wrap">
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
                </div>
                <div className="field-wrap">
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
                </div>
                <div className="field-wrap">
                  <Input
                    value={this.state.carMake}
                    onChange={this.handleInputChange}
                    name="carMake"
                    type="text"
                    placeholder="Manufacturer"
                    id="carMake"
                    required
                  />
                </div>
                <div className="field-wrap">
                  <Input
                    value={this.state.carModel}
                    onChange={this.handleInputChange}
                    name="carModel"
                    type="text"
                    placeholder="Model"
                    id="carModel"
                    required
                  />
                </div>
                <div className="field-wrap">
                  <Input
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    type="text"
                    placeholder="Location"
                    id="location"
                    required
                  />
                </div>
                <div className="field-wrap">
                  <DropDown
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    name="category"
                    type="text"
                    id="catecory"
                  >
                    <option>category2</option>
                    <option>category3</option>
                    <option>category4</option>
                  </DropDown>
                </div>
              </div>
              <FormBtn
                type="submit"
                className="button button-block"
                onClick={this.handleFormSubmit}
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

export default Submit;
