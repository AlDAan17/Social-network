import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () =>{
    return (
        <nav className = {classes.navBar}>
            <ul className = {classes.navName}>
                <li><a href="/profile" className = {classes.item}>Profile</a></li>
                <li><a href="/dialogs" className = {classes.item}>Messages</a></li>
                <li><a className = {classes.item}>News</a></li>
                <li><a className = {classes.item}>Music</a></li>
                <li><a className = {classes.item}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;