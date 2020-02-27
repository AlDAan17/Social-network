import React from 'react';
import classes from './Profile.module.css';
import bg from './../bg.jpg';

const Profile = () =>{
    return (
        <div className = {classes.content}>
            <div>
                <img src={bg} />
            </div>
            <div>
                avatar + desription
          </div>
            <div>
                myPosts
              <div>
                    newPost
              </div>
                <div className = {classes.item}>
                    post1
              </div>
                <div>
                    post2
              </div>
            </div>
            <div>
                messages
          </div>
        </div>
    );
}

export default Profile;