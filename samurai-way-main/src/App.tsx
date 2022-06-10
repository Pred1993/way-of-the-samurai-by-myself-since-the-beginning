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
import {PostDataType} from "./Components/Profile/MyPosts/Post/Post";
import {DialogsDataType} from "./Components/Dialogs/DialogItem/DialogItem";
import {MessageDataType} from "./Components/Dialogs/Message/Message";
export  type AppPropsType = {
    postData: Array<PostDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessageDataType>
}



function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsData={props.dialogsData}
                        messagesData={props.messagesData}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        postData={props.postData}
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
