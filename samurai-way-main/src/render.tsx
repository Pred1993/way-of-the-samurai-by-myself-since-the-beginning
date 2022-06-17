import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {StateType} from "./redax/state";
export function rerenderEntireTree (state: StateType, addPost: (name: string) => void) {
ReactDOM.render(

    <App
      state={state}
      addPost={addPost}
      />,
  document.getElementById('root')
);
}