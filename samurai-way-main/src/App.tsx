import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Setting} from "./Components/Setting/Setting";
import {News} from "./Components/News/News";
import {StateType} from "./redax/state";

export type AppPropsType = {
    state: StateType
    addPost: (name: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsData={props.state.messagesPage.dialogsData}
                        messagesData={props.state.messagesPage.messagesData}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        postData={props.state.profilePage.postData}
                        addPost={props.addPost}
                    />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App
