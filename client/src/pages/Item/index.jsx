import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from 'react-router';
import UserContainer from "../../components/UserContainer";
import 'gestalt/dist/gestalt.css';
import "./index.css";


// Use url to search through database and update accordingly
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: []
        };
    }

    componentDidMount() {
        API.getPostById(this.props.match.params.id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ posts: res.data });
                API.findUserById(this.state.posts.UserId)
                    .then(res => {
                        console.log(res.data)
                        this.setState({ users: res.data})
                    })
                    .catch(err => console.log(err.response));
            })
            .catch(err => console.log(err.response));
    }

    render() {
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-6 offset-3 item-container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="post-title">{this.state.posts.title}</p>
                                </div>
                            </div>
                            <hr className="pb-4" />
                            <div className="row">
                                <div className="col-6 postImg" style={{ backgroundImage: `url("${this.state.posts.itemImg}")` }}>
                                    {/* <img src={this.state.posts.itemImg} className="img-fluid" alt={this.state.posts.title} /> */}
                                </div>
                                <div className="col-6">
                                    <div className="row item-tagscontainer">
                                        <div className="col-12 mb-4">
                                            <UserContainer user={this.state.users} />
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Price: </span>${this.state.posts.price}</p>
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Make: </span>{this.state.posts.carMake}</p>
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Model: </span>{this.state.posts.carModel}</p>
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Year: </span>{this.state.posts.carYear}</p>
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Location: </span>{this.state.posts.location}</p>
                                        </div>
                                        <div className="col-12">
                                            <p><span className="tags">Category: </span>{this.state.posts.category}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4 mt-4" />
                            <div className="row">
                                <div className="col-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    {console.log(JSON.stringify(this.state.posts))}
                </div>
                <div>
                    <h1>{this.state.posts.id}</h1>
                    <h1>{this.state.posts.title}</h1>
                    <p>{this.state.posts.desc}</p>
                    <h1>{this.state.posts.itemImg}</h1>
                    <h1>{this.state.posts.price}</h1>
                    <h1>{this.state.posts.carYear}</h1>
                    <h1>{this.state.posts.carMake}</h1>
                    <h1>{this.state.posts.carModel}</h1>
                    <h1>{this.state.posts.location}</h1>
                    <h1>{this.state.posts.category}</h1>
                    <h1>{this.state.posts.createdAt}</h1>
                    <h1>{this.state.posts.updatedAt}</h1>
                    <h1>{this.state.posts.UserId}</h1>
                </div> */}
            </div>
        );
    }
}


export default withRouter(Item);
