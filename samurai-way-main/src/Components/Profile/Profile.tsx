import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redax/state";

export type ProfilePropsType = {
    postData: Array<PostDataType>
    addPost: () => void
    newText: string
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost
                postData={props.postData}
                addPost={props.addPost}
                newText={props.newText}
                updateNewPostText={props.updateNewPostText}
            />
        </main>
    )
}
