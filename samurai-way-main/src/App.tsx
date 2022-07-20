import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Setting} from "./Components/Setting/Setting";
import {News} from "./Components/News/News";
import UsersContainer from "./Components/Users/Users.Container";


function App() {
    return (
            <div className='app'>
                <Header/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
    );
}

export default App
