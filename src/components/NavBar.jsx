import React from 'react';
import classes from './NavBar.module.css';

// let classes = {
//     'navBar' : 'NavBar_navBar__2EOGa',
//     'navName' : 'NavBar_navName__2GhsT'
//     'item' : '',
// }

const NavBar = () =>{
    return (
        <nav className = {classes.navBar}>
            <ul className = {classes.navName}>
                <li><a className = {classes.item}>Profile</a></li>
                <li><a className = {classes.item}>Messages</a></li>
                <li><a className = {classes.item}>News</a></li>
                <li><a className = {classes.item}>Music</a></li>
                <li><a className = {classes.item}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;