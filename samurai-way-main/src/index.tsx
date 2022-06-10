import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {PostDataType} from "./Components/Profile/MyPosts/Post/Post";
import {DialogsDataType} from "./Components/Dialogs/DialogItem/DialogItem";
import {MessageDataType} from "./Components/Dialogs/Message/Message";

let postData: Array<PostDataType> = [
    {id: 1, message: 'Hi, how are you?', likesCounts:5, img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png' },
    {id: 2,message: 'Where shall we meet?', likesCounts:10, img: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' },
    {id: 3, message: 'I owe you one', likesCounts:15, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/831191113317295.60253312928ed.jpg' },
    {id: 4, message: 'Good luck', likesCounts:20, img: 'https://static3.tgstat.ru/channels/_0/22/227399b151c2a39bdff1a81610dfd75a.jpg' },
    {id: 5, message: 'Сondemn', likesCounts:5, img: 'https://abrakadabra.fun/uploads/posts/2021-11/1636651853_5-abrakadabra-fun-p-krasivie-avatarki-iz-pinteresta-7.jpg' }
]

let dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Nikolay'}
]

let messagesData: Array<MessageDataType> = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Nice'},
    {id: 3, message: 'Good morning'},
    {id: 4, message: 'How are you?'},
    {id: 5, message: 'Ok!'}
]

ReactDOM.render(
    <App
        postData={postData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />,
  document.getElementById('root')
);