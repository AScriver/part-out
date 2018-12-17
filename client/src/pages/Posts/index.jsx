import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer"
import { withRouter } from 'react-router'
import axios from 'axios';
import "./index.css";

// Use url to search through database and update accordingly
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      carMake: "",
      carModel: "",
      carYear: "",
    };
    this.signal = axios.CancelToken.source();
  }

  componentDidMount() {
    API.getAllPosts({
      cancelToken: this.signal.token,
    })
      .then(resp => {
        this.setState({
          posts: resp.data,
        });
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          console.log('Error: ', error.message); // => prints: Api is being canceled
        } else {
          console.log(error)
        }
      });
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled')
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });


  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Form Submitted')
  }





  render() {
    const filterMake = this.state.posts.filter(post => post.carMake.toLowerCase().indexOf(this.state.carMake.toLowerCase()) !== -1)
    const filterModel = filterMake.filter(post => post.carModel.toLowerCase().indexOf(this.state.carModel.toLowerCase()) !== -1)
    const filterYear = filterModel.filter(post => post.carYear.toString().indexOf(this.state.carYear.toString()) !== -1 )
    const {carMake, carModel, carYear } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar
                carMake={this.state.carMake}
                carModel={this.state.carModel}
                carYear={this.state.carYear}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={(event) => {
                  event.preventDefault()
                  this.handleFormSubmit(event);
                }}
              />
            </div>
            <div className="col-8 offset-1">
              {(carMake && carModel && carYear) ? 
              filterYear.map(post => (
                <PostContainer post={post} key={post.id} />
              )) :
              (carMake && carModel) ?
              filterModel.map(post => (
                <PostContainer post={post} key={post.id} />
              )) :
              (carMake) ?
              filterMake.map(post => (
                <PostContainer post={post} key={post.id} />
              )) :
              this.state.posts.map(post => (
                <PostContainer post={post} key={post.id} />
            ))
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Posts);
