import React from 'react';
import './App.css';
import kotori from './kotori.png';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';

const App = () => {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;