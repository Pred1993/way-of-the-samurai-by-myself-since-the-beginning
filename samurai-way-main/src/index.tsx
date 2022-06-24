import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addMessage, addPost, state, StateType, subscriber, updateNewMessage, updateNewPostText} from "./redax/state";

export const  rerenderEntireTree = (state :StateType ) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessage={updateNewMessage}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscriber(rerenderEntireTree)
