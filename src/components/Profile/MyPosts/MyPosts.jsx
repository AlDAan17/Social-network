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
                <Post message='Watashi wa' likesCount="12"/>
                <Post message='ararage' likesCount="17"/>
            </div>
        </div>
    );
}

export default MyPosts;