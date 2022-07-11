import React from "react";
import {ProfilePropsType} from "../Profile";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import {MyPost} from "./MyPost";

export const MyPostContainer = (props: ProfilePropsType) => {
    const onClickHandlerAddPost = () => {
        props.store.dispatch(AddPostActionCreator())
        }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }
    return (
        <MyPost updateNewPostText={onChangeHandler}
                addPost={onClickHandlerAddPost}
                postData={props.store.getState().profilePage.postData}
                newText={props.store.getState().profilePage.newText}
        />
    )
}
