import React from "react";
import classes from './MyPosts.module.css'
import {Post, PostDataType} from "./Post/Post";
import {MessageDataType} from "../../Dialogs/Message/Message";

export const MyPost = () => {
    let postData: Array<PostDataType> = [
        {id: 1, message: 'Hi, how are you?', likesCounts:5, img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png' },
        {id: 2,message: 'Where shall we meet?', likesCounts:10, img: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' },
        {id: 3, message: 'I owe you one', likesCounts:15, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/831191113317295.60253312928ed.jpg' },
        {id: 4, message: 'Good luck', likesCounts:20, img: 'https://static3.tgstat.ru/channels/_0/22/227399b151c2a39bdff1a81610dfd75a.jpg' },
        {id: 5, message: 'Сondemn', likesCounts:5, img: 'https://abrakadabra.fun/uploads/posts/2021-11/1636651853_5-abrakadabra-fun-p-krasivie-avatarki-iz-pinteresta-7.jpg' }
    ]
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post postData={postData}/>
            </div>
        </div>
    )
}