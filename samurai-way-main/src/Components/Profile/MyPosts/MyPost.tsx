import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPost = () => {
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post
                    message={'Hi, how are you?'} likesCounts={5}/>
                <Post
                    message={'It is my first post'}
                    likesCounts={10}/>
            </div>
        </div>
    )
}