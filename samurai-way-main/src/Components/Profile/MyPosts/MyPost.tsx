import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

import {ProfilePropsType} from "../Profile";
import actions from "redux-form/lib/actions";
import {ActionType} from "../../../redax/state";

export const MyPost = (props: ProfilePropsType) => {
    const onClickHandlerAddPost = () => {
        props.dispatch({ type: "ADD-POST"})
        }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
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
