import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { signoutReq } from "../../state/auth/actions";


// These look really hacky, but they're just used to show/hide nav links depending
// on whether or not a user is logged in.

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
                    <Link to="/" className="navbar-brand"> PartOut </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-pills nav-fill ml-auto">
                            {this.props.username ?
                                <li className="nav-item">
                                    <Link to={`/user/${this.props.id}`} className="nav-link">Signed in as: {this.props.username}</Link>
                                </li>
                                :
                                ""
                            }
                            {this.props.username ?
                                <li className="nav-item">
                                    <Link to="/submit" className="nav-link">Submit</Link>
                                </li>
                                :
                                ""
                            }
                            {this.props.username ?
                                <li className="nav-item">
                                    <Link to="/" onClick={() => this.props.logoutButton()} className="nav-link">Logout</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            }
                            {this.props.username ?
                                ""
                                :
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">Signup</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        id: state.auth.id,
        username: state.auth.username
    };
};

function mapDispatchToProps(dispatch){
    return{
        logoutButton(){
            dispatch(signoutReq());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);