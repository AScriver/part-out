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
    this.loadPosts()
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


  loadPostMake = () => {
    API.getPostByMake(this.state.carMake)
      .then(resp => {
        this.setState({
          posts: resp.data,
          carMake: ""
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadPostMakeModel = () => {
    API.getPostByMakeModel(this.state.carMake, this.state.carModel)
      .then(resp => {
        // const {history} = this.props;
        // history.push('/search/' + this.state.carMake + '/' + this.state.carModel)

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

  loadPostMakeModelYear = () => {
    API.getPostByMakeModelYear(this.state.carMake, this.state.carModel, this.state.carYear)
      .then(resp => {
        // const {history} = this.props;
        // history.push('/search/' + this.state.carMake + '/' + this.state.carModel + '/' + this.state.carYear)

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
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("yee")
      if (this.state.carMake !== "") {
        this.loadPostMake();
      } else if (this.state.carMake !== "" && this.state.carModel !== "") {
        this.loadPostMakeModel();
      } else if (this.state.carMake !== "" && this.state.carModel !== "" && this.state.carYear !== 0) {
        this.loadPostMakeModelYear();
      } else {
        console.log("form submit broke lmao")
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
