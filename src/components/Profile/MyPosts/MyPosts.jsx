import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;