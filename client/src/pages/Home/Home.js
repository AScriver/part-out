import React, { Component } from "react";


class Home extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.user}</h1>
            <h1>{this.props.email}</h1>
            <h1>{this.props.profileImg}</h1>
            <h1>{this.props.firstName}</h1>
            <h1>{this.props.lastName}</h1>
            </div>
            );
    };
};

export default Home;
