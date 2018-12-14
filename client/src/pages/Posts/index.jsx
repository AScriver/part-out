import React, { Component } from "react";
// import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";
import "./index.css";

// Use url to search through database and update accordingly

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    API.getAllPosts()
      .then(resp => {
        this.setState({ posts: resp.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* <Sidebar /> */}
            <div className="col-12">
              {this.state.posts.map(post => (
                <div
                  key={post.id}
                  className="row posts-container no-gutters pb-0 mb-2"
                  style={{ border: "1px solid black" }}
                >
                  <div className="col-3 my-auto">
                    <img
                      className="img-fluid"
                      src={post.itemImg}
                      alt={post.title}
                    />
                  </div>
                  <div className="userpost col-9 d-flex align-content-around flex-column">
                    <h3 className='mb-auto text-center'>
                        {post.title} - {post.category}
                    </h3>
                    <hr/>
                    <p className="my-auto mx-3"><span className="postLabel">Description: </span>{post.desc}</p>
                    <h6 className="my-auto mx-3"><span className="postLabel">Location: </span>{post.location}</h6>
                    <div className="row no-gutters mx-3 mb-0">
                      <div className="col-12 my-auto">
                        <p className="mb-0"><span className="postLabel">Price: </span>${post.price}</p>
                      </div>
                      <div className="row">
                      <div className="col-12 my-auto">
                        <p className="mb-0"><span className="postLabel">Fits: </span>{post.carYear} {post.carMake} {post.carModel}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
