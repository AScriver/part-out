import React, { Component } from "react";
import PostContainer from "../../components/PostContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import API from "../../utils/API";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: [],
      
    };
 
  }

  componentDidMount() {
    API.findUserById(this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>{console.log(JSON.stringify(this.state.user))}</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              {this.state.posts.map(post => (
                <PostContainer post={post} />
              ))}
              <h1>No Posts To Show!</h1>
            </div>
            <div className="col-2 sidebar-container">
              <p>{this.state.user.username}</p>
              <p>{this.state.user.id}</p>
              <p>{this.state.user.email}</p>
              <p>{this.state.user.profileImg}</p>
            </div>
            <div className="col-2 sidebar-container">
              <p>{this.props.username}</p>
              <p>{this.props.id}</p>
              <p>{this.props.email}</p>
              <p>{this.props.profileImg}</p>
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
