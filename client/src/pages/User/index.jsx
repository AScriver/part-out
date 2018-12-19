import React, { Component } from "react";
import PostContainer from "../../components/PostContainer";
import CommentContainer from "../../components/CommentContainer"
import UserContainer from "../../components/UserContainer"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import API from "../../utils/API";
import "./index.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: [],
      comments: []
    };

  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.findUserById(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data.user,
          posts: res.data.user.Posts,
          comments: res.data.comments
        });
        console.log(this.state.posts)
      })
      .catch(err => console.log(err));
      this.setState(this.state)
  }

  handleCommentDelete = id => {
    API.deleteComment(id)
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  }

  handlePostDelete = id => {
    API.deletePost(id)
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 user-data-container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>{this.state.user.username}'s Posts</h2>
                </div>
              </div>
              <hr className="pb-4" />
              <div className="row">
                <div className="col-12">
                  {this.state.posts.length > 0 ?
                    this.state.posts.map(post => (
                      <PostContainer handledelete={this.handlePostDelete} post={{ ...post, User: this.state.user }} key={post.id} check={this.props.id} />
                    ))
                    :
                    <h1>No Posts To Show!</h1>
                  }
                </div>
              </div>
            </div>
            <div className="col-4 user-data-container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>{this.state.user.username}'s Comments</h2>
                </div>
              </div>
              <hr className="pb-4" />
              <div className="row">
              <div className="col-12">
                {this.state.comments.length > 0 ?
                  this.state.comments.map(comments => (
                      <CommentContainer handledelete={this.handleCommentDelete} check={this.props.id} comment={comments} className="hover-effect single-comment" key={comments.id}/>
                  ))
                  :
                  <h1>No Comments To Show!</h1>
                }
                </div>
              </div>
            </div>
            <div className="col-4 user-data-container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>{this.state.user.username}'s Information</h2>
                </div>
              </div>
              <hr className="pb-4" />
              <div className="row">
              <div className="col-12">
                  <UserContainer user={this.state.user}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    id: state.auth.id,
    email: state.auth.email,
    profileImg: state.auth.profileImg
  };
};

export default withRouter(connect(mapStateToProps)(User));

// as far as determining if the user is viewing their own profile,
// a new component could be made with a ternary operator that checks
// the user name or id from the redux store with the currently viewed
// page and displays the necessary component from there. could possibly
// fit this into a single component like so:

// render(){
//     return(
//         {(props.userId === post.user.Id ) ?
//             <UserProfile />
//         :
//             <SomeOtherUserProfile />
//         }
//     )
// }

// because we are getting the users information from the post database,
// no information will be shown if the user has not made any posts. To fix this
// a separate component should also be made to get the users information directly
// from the User database.


// {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
// config: {adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}
// data:
// comments: Array(2)
//  0:
//    PostId: 1
//    comment: "Something Else!"
//    createdAt: "2018-12-19T04:07:07.000Z"
//    id: 8
//    updatedAt: "2018-12-19T04:07:07.000Z"
//    user: "asdfasdf"
//    userid: "2"
//    __proto__: Object
//  1: {id: 9, user: "asdfasdf", userid: "2", comment: "Ayylmao", createdAt: "2018-12-19T04:07:15.000Z", …}
//  length: 2
//  __proto__: Array(0)
//  user:
//    Posts: Array(0)
//    length: 0
//    __proto__: Array(0)
//    createdAt: "2018-12-19T04:05:56.000Z"
//    email: "xGerbil@live.com"
//    id: 2
//    password: "$2a$10$5p2jO8xLZltCHYwkZA9CHOQODHMcuVppT3mqlnrD5J/W1grU8q.ny"
//    profileImg: "default.png"
//    updatedAt: "2018-12-19T04:05:56.000Z"
//    username: "asdfasdf"
//    __proto__: Object
//    __proto__: Object
// headers: {date: "Wed, 19 Dec 2018 04:21:21 GMT", etag: "W/"23f-YNPvOKHUFGQV1ume4nMKf8oJyyU"", connection: "close", x-powered-by: "Express", content-length: "575", …}
// request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status: 200
// statusText: "OK"
// __proto__: Object

