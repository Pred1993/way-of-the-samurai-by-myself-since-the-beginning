import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redax/state";

export type ProfilePropsType = {
    postData: Array<PostDataType>
    addPost: (name: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost
                postData={props.postData}
                addPost={props.addPost}
            />
        </main>
    )
}
