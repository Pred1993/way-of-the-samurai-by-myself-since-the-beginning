import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

import {ProfilePropsType} from "../Profile";

export const MyPost = (props: ProfilePropsType) => {
    let newPostElement = React.createRef <HTMLTextAreaElement>()
    const onClickHandlerAddPost = () => {
        if(newPostElement.current) {
        props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""
        }
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <button onClick={onClickHandlerAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post postData={props.postData}/>
            </div>
        </div>
    )
}