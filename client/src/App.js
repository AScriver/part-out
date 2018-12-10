import React, { Component } from "react";
import { Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import NoMatch from './pages/NoMatch';
import Posts from './pages/Posts';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Submit from './pages/Submit';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/posts/:make?/:model?/:year?" component={Posts} />
          {/* <Route exact path="/item/:id" component={Item} /> */}
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/login" component={LogIn} /> */}
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