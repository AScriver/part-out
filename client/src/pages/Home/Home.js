import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Posts from "../Posts";

class Home extends Component {
    render(props) {
        return (
            <div>
                {(this.props.user != undefined) ? (
                    <h1>Wecome {this.props.user}</h1>
                ) : (
                    <Redirect to={{
                        pathname: "/signup"
                      }} />
                )}
            </div>
            );
    };
};

export default Home;
