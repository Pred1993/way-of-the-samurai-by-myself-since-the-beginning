import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

import {ProfilePropsType} from "../Profile";

export const MyPost = (props: ProfilePropsType) => {
    const onClickHandlerAddPost = () => {
        props.addPost()
        }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onChangeHandler} value={props.newText} /></div>
                <button onClick={onClickHandlerAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post postData={props.postData}/>
            </div>
        </div>
    )
}
