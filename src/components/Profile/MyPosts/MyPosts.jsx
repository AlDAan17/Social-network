import React from 'react';
import classes from './MyPosts.module.css';
import bg from './../../../bg.jpg';

const MyPosts = () => {
  return (
    <div>
      myPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remvoe</button>
      </div>
      <div className={classes.item}>
        <img src="https://i.pinimg.com/originals/c7/38/21/c7382166555b44fb4263a320031b4aae.jpg" alt="" />
        post1
      </div>
      <div>
        post2
      </div>
      <div>
        messages
      </div>
    </div>
  );
}

export default MyPosts;