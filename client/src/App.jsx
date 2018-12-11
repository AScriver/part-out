import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch";
import Posts from "./pages/Posts";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Submit from "./pages/Submit";
import API from './utils/API';
import PrivateRoute from './components/PrivateRoute';
import "./App.css";


class App extends Component {
  state = {
    email: "",
    user: "",
    profileImg: "",
    firstname: "",
    lastName: ""
  };

  componentDidMount() {
    this.getUser();
  }

  login = (user) => {
    this.setState({
      user: user
    })
  }

  getUser = () => {
    API.getUser()
      .then(res => {
        this.setState({
          email: res.data.email,
          user: res.data.username,
          profileImg: res.data.profileImg,
          firstName: res.data.firstName,
          lastName: res.data.lastName 
        });
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  render() {
    return (
      <div>
        <Switch>

          {/* <Route exact path="/" render={() => <Home 
            user={this.state.user}
            email={this.state.email}
            profileImg={this.state.profileImg}
            firstName={this.state.firstName}
            lastname={this.state.lastName}
            />}
            /> */}
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" render={() => <LogIn login={this.login} />} />
            <PrivateRoute path="/" 
              component={Home}
              user={this.state.user}
              email={this.state.email}
              profileImg={this.state.profileImg}
              firstName={this.state.firstName}
              lastname={this.state.lastName} />

          {/* <Route exact path="/item/:id" component={Item} /> */}
          
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

////////////////////////////////////////////// N O T E S ///////////////////////////////////////////////////////
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

/*Each router creates a history object, which it uses to keep track of the current location[1] 
and re-render the website whenever that changes. The other components provided by React Router 
rely on having that history object available through React’s context, so they must be rendered 
as descendants of a router component. A React Router component that does not have a router as one 
of its ancestors will fail to work. */

/* A <Route> expects a path prop, which is a string that describes the pathname that the route 
matches — for example, <Route path='/roster'/> should match a pathname that begins with /roster.
When the current location’s pathname is matched by the path, the route will render a React element.
When the path does not match, the route will not render anything.*/

/* 
To collect data from multiple children, or to have two child components communicate with each other, 
you need to declare the shared state in their parent component instead. The parent component can pass 
the state back down to the children by using props; this keeps the child components in sync with each 
other and with the parent component.
*/
