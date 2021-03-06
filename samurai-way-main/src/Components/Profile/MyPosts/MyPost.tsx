import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPost.Container";
export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

export const MyPost = (props: MyPostPropsType) => {
    const onClickHandlerAddPost = () => {
        props.addPost()
        }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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
