import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {likesCount: 1, message: 'Hello World!'},
    {likesCount: 2, message: 'Here we are'},
]

let dialogsData = [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Alisa'},
]

let messagesData = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'Here we are'},
    {id: 3, message: '...'},
    {id: 4, message: '.....'},
]

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData}
                     messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
