import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
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
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-10">
              {this.state.posts.map(post => (
                <div
                  key={post.id}
                  className="row posts-container no-gutters pb-0 mb-2"
                  style={{ border: "1px solid black" }}
                >
                  <div className="col-3 ">
                    <img
                      className="img-fluid"
                      src={post.itemImg}
                      alt={post.title}
                    />
                  </div>
                  <div className="col-9">
                    <h3>
                      <p>
                        {post.title} - {post.category}
                      </p>
                    </h3>
                    <p>{post.desc}</p>
                    <h6>{post.location}</h6>
                    <div className="row no-gutters mb-0">
                      <div className="col-3 mb-0">
                        <p className="mb-0">${post.price}</p>
                      </div>
                      <div className="col-3 mb-0">
                        <p className="mb-0">{post.carYear}</p>
                      </div>
                      <div className="col-3 mb-0">
                        <p className="mb-0">{post.carMake}</p>
                      </div>
                      <div className="col-3 mb-0">
                        <p className="mb-0">{post.carModel}</p>
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

// Will need to be passed down as props.

/*Here, ShoppingList is a React component class, or React component type.
A component takes in parameters, called props (short for “properties”),
and returns a hierarchy of views to display via the render method. */

// const postSeed = [{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     }] */
