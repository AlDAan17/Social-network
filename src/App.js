import React from 'react';
import './App.css';
import kitty from './kitty-logo.png';
import bg from './bg.jpg';
import kotori from './kotori.png';

const App = () => {
  return (
    <div className = 'app-wrapper'>
      <header className = 'header'>
        <img src = {kitty}/>
      </header>
      <nav className = 'navBar'>
        {/* <div>Profile</div>
        <div>Profile</div> */}
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
      <div className = 'content'>
          <div>
            <img src = {bg}/>
          </div>
          <div>
            avatar + desription
          </div>
          <div>
            myPosts
              <div>
                newPost
              </div>
              <div>
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
    </div>
  );
}

export default App;