import React from 'react';
import classes from './Profile.module.css';
import bg from './../../bg.jpg';
import MyPosts from './MyPosts/MyPosts';

<<<<<<< HEAD
const Profile = () => {
    return (
        <div>
            <div>
                <img src={bg}/>
            </div>
            <div>avatar + desription</div>
            <MyPosts/>
=======
const Profile = () =>{
    return (
        <div className = {classes.content}>
            <div>
                <img src={bg} />
            </div>
            <div>
                avatar + desription
          </div>
          <MyPosts />
>>>>>>> 68dbb37b98d03bf5480dbea6e6afa91d5503ff79
        </div>
    );
}

export default Profile;