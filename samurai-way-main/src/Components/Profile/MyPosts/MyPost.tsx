import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";




import {ProfilePropsType} from "../Profile";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redax/state";
export const MyPost = (props: ProfilePropsType) => {
    const onClickHandlerAddPost = () => {
        props.dispatch(AddPostActionCreator())
        }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostTextActionCreator(e.currentTarget.value))
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
