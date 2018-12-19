import React, { Component } from 'react';
import { Box, Avatar, Text } from 'gestalt';
import { Link } from "react-router-dom";


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
                        <Avatar name={this.props.user.username} size={this.props.size ? this.props.size : "md"} />
                    </Box>
                    <Box paddingX={1}>
                        <Text bold><Link to={`/user/${this.props.user.id}`}>{this.props.user.username ? this.props.user.username : this.props.username}</Link></Text>
                        {/* <Text>joined 2 years ago</Text> */}
                    </Box>
                </Box>
            </div>
        )
    }
}

export default UserContainer;






