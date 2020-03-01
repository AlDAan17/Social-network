import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/c7/38/21/c7382166555b44fb4263a320031b4aae.jpg" alt=""/>
            {props.message}
            <div>Like {props.likesCount}</div>
        </div>
    );
}

export default Post;