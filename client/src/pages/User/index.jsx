import React, { Component } from 'react';
import PostContainer from "../../components/PostContainer"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            profileImg: ''
        }
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 offset-1'>
                            {this.state.posts.map(post => (
                                <PostContainer post={post} />
                            ))}
                        </div>
                        <div className='col-2'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;