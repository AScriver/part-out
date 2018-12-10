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
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand"> PartOut </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-pills nav-fill ml-auto">
                        <li class="nav-item">
                            <Link to="/" className="nav-link"> My Parts </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" className="nav-link"> Logout </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;