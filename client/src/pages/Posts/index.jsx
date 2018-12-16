import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer"
import { withRouter } from 'react-router'
import "./index.css";

// Use url to search through database and update accordingly
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      carMake: "",
      carModel: "",
      carYear: 0
    };
  }

  componentDidMount() {
    const { carMake, carModel, carYear } = this.props.match.params;
    if( carMake && carModel && carYear ){
      console.log("component mounted, calling loadPostsMakeModelYear");
      console.log(carMake, carModel, carYear);
      this.loadPostsMakeModelYear(carMake, carModel, carYear);
    } else if ( carMake && carModel ){
      console.log("component mounted, calling loadPostsMakeModel");
      console.log(carMake, carModel, carYear);
      this.loadPostsMakeModel(carMake, carModel);
    } else if ( carMake ){
      console.log("component mounted, calling loadPostsMake");
      console.log(carMake, carModel, carYear);
      this.loadPostsMake(carMake);
    } else {
      console.log("component mounted, calling loadPosts");
      console.log(carMake, carModel, carYear);
      this.loadPosts();
    }
  }

  componentDidUpdate() {
    
  }

  loadPosts = () => {
    API.getAllPosts({})
      .then(resp => {
        this.setState({
          posts: resp.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  loadPostsMake = (carMake) => {
    API.getPostByMake(carMake)
      .then(resp => {
        console.log("loadPostsMake success");
        this.setState({
          posts: resp.data,
          carMake: ""
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadPostsMakeModel = (carMake, carModel) => {
    API.getPostByMakeModel(carMake, carModel)
      .then(resp => {
        console.log("loadPostsMakeModel success");
        this.setState({
          posts: resp.data,
          carMake: "",
          carModel: ""
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadPostsMakeModelYear = (carMake, carModel, carYear) => {
    API.getPostByMakeModelYear(carMake, carModel, carYear)
      .then(resp => {
        console.log("loadPostsMakeModelYear success");
        this.setState({
          posts: resp.data,
          carMake: "",
          carModel: "",
          carYear: 0
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("input Changed " + name + " " + value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Handling form submit");
    const { carMake, carModel, carYear } = this.state;
    const { history } = this.props
    if(carMake && carModel && carYear){
      history.push('/search/' + carMake + '/' + carModel + '/' + carYear)
    } else if ( carMake && carModel){
      history.push('/search/' + carMake + '/' + carModel)
    } else if ( carMake){
      history.push('/search/' + carMake)
    } else {
      history.push('/')
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
            <div className="col-8 offset-1">
              {this.state.posts.map(post => (
                <PostContainer post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Posts);
