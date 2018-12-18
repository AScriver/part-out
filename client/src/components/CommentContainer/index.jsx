import React, { Component } from 'react';
import { Box, Avatar, Text } from 'gestalt';
import { Link } from "react-router-dom";


class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                        <Avatar name="Placeholder" size="md" />
                    </Box>
                    <Box paddingX={1}>
                        <Text bold><Link to={`/`}>Example</Link></Text>
                        <Text>Example Comment AyyLmao</Text>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default CommentContainer;
