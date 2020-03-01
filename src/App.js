import React from 'react';
import './App.css';
import kotori from './kotori.png';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

// const App = () => {
//     return (
//         <BrowserRouter>
//             <div className='app-wrapper'>
//                 <Header/>
//                 <NavBar/>
//                 <div className='app-wrapper-content'>
//                     <Route path="/Profile" component={Profile}/>
//                     <Route path="/Dialogs" component={Dialogs}/>
//                     {/*<Profile />*/}
//                     <Dialogs/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
//why it's doesn't work..

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                    {/*<Profile />*/}
                </div>
            </div>
        </BrowserRouter>)
}

export default App;