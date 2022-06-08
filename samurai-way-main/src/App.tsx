import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MyPost} from "./Components/Profile/MyPosts/MyPost";
import {Profile} from "./Components/Profile/Profile";

function App() {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}
export default App
