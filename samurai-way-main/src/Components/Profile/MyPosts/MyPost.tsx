import React from "react";
import classes from './MyPosts.module.css'
import {Post, PostDataType} from "./Post/Post";
import {MessageDataType} from "../../Dialogs/Message/Message";
export type MyPostPropsType = {
    postData: Array<PostDataType>
}
export const MyPost = (props: MyPostPropsType) => {
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post postData={props.postData}/>
            </div>
        </div>
    )
}