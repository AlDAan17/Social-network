import React from 'react';
import classes from './Profile.module.css';
import bg from './../../bg.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src={bg}/>
            </div>
            <div>avatar + desription</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;