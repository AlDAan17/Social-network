import React from 'react';
import classes from './MyPosts.module.css';
<<<<<<< HEAD
import Post from './Post/Post';
=======
import bg from './../../../bg.jpg';
>>>>>>> 68dbb37b98d03bf5480dbea6e6afa91d5503ff79

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
<<<<<<< HEAD
        <Post />
        <Post />
        <Post />
=======
        <img src="https://i.pinimg.com/originals/c7/38/21/c7382166555b44fb4263a320031b4aae.jpg" alt="" />
        post1
      </div>
      <div>
        post2
      </div>
      <div>
        messages
>>>>>>> 68dbb37b98d03bf5480dbea6e6afa91d5503ff79
      </div>
    </div>
  );
}

export default MyPosts;