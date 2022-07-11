import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store, StoreReduxType} from "./redux/redux-store";

export const  rerenderEntireTree = (store:StoreReduxType ) => {
    ReactDOM.render(
        <App
            // state={state}
            // dispatch={store.dispatch.bind(store)}
            store={store}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => {
    rerenderEntireTree(store)
})
