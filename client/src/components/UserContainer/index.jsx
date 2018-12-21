import React, { Component } from 'react';
import { Box, Avatar, Text } from 'gestalt';
import { Link } from "react-router-dom";
import moment from 'moment'
import { connect } from 'react-redux'


class UserContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Box
                    alignItems="center"
                    direction="row"
                    display="flex"
                    marginStart={-1}
                    marginEnd={-1}
                >
                    <Box paddingX={1}>
                        <Avatar verified={this.props.verified} name={this.props.user.username} size={this.props.size ? this.props.size : "md"} />
                    </Box>
                    <Box paddingX={1}>
                        <Text bold><Link to={`/user/${this.props.user.id}`}>{this.props.user.username}</Link></Text>
                        {this.props.user.createdAt ? <Text>Joined {moment(this.props.user.createdAt).fromNow()}</Text> : " "}
                    </Box>
                    
                </Box>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        id: state.auth.id,
        verified: state.auth.verified,
        permissions: state.auth.permissions
    }
}

export default connect(mapStateToProps)(UserContainer);





