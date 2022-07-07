import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {StateType, store} from "./redax/state";

export const  rerenderEntireTree = (state :StateType ) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            addMessage={store.addMessage.bind(store)}
            updateNewMessage={store.updateNewMessage.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)
