import React from 'react';
import classes from './Profile.module.css';
import bg from './../../bg.jpg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;