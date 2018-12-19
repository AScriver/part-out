import React, { Component } from 'react';
import { Box, Avatar, Text } from 'gestalt';
import { Link } from "react-router-dom";


function CommentContainer(props){
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
                        <Avatar name={props.comment.user ? props.comment.user : "loading..."} size="md" />
                    </Box>
                    <Box paddingX={1}>
                        <Text bold><Link to={`/user/${props.comment.userid ? props.comment.userid : "/"}`}>{props.comment.user ? props.comment.user : "loading..."}</Link></Text>
                        <Text>{props.comment.comment ? props.comment.comment : "loading..."}</Text>
                    </Box>
                </Box>
            </div>
        )
}

export default CommentContainer;
