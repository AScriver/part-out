import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "../Posts";
import Submit from "../Submit"

class Restrict extends Component {
    render() {
        return (
            <div>
                {(this.props.user !== undefined) ? (
                    <Switch>
                        <Route exact path="/" render={() => <Posts user={this.props.user}/>} />
                        <Route exact path="/submit" render={() => <Submit user={this.props.user}/>} />
                    </Switch>
                ) : (
                    <Redirect to={{pathname: "/signup"}} />
                )}
            </div>
        );
    };
};

export default Restrict;
