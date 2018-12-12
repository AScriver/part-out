import React, {
    Component
} from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        // 
    }

    render() {
        return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
                <Link to="/" className="navbar-brand"> PartOut </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-pills nav-fill">
                    <li className="nav-item">
                            <Link to="/" className="nav-link">{this.props.user}</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/" className="nav-link"> My Parts </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" className="nav-link"> Logout </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link to="/submit" className="nav-link"> /submit </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" className="nav-link"> / </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;