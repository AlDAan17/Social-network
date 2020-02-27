import React from 'react';
import classes from  './Header.module.css';
import kitty from './../kitty-logo.png';

const Header = () => {
    return (
        <header>
            <img src={kitty} />
        </header>
    );
}

export default Header;