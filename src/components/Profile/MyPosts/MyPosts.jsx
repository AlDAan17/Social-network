import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {likesCount: 1, message: 'Hello World!'},
        {likesCount: 2, message: 'Here we are'},
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>myPosts</h3>
            <div>
                <textarea></textarea>
                <div><button className={classes.postAdd}>Add post</button>
                <button className={classes.postRemove}>Remvoe</button></div>
            </div>
            <div className={classes.item}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;