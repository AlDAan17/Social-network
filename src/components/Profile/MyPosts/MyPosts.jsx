import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>myPosts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button className={classes.postAdd}>Add post</button>
                    <button className={classes.postRemove}>Remvoe</button>
                </div>
            </div>
            <div className={classes.item}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;