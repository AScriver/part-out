import React, { Component } from "react";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <h1>Home Page Rendered!</h1>
        );
    };
};

export default Home;
