import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";

export const  rerenderEntireTree = (state :StateType ) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
