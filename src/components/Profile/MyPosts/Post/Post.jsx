import React from 'react';
import classes from './Post.module.css';
import bg from './../../../../bg.jpg';

const Post = () => {
  return (

    <div className={classes.item}>
      <img src="https://i.pinimg.com/originals/c7/38/21/c7382166555b44fb4263a320031b4aae.jpg" alt="" />
      post1
          <div>Like</div>
    </div>

  );
}

export default Post;