import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redax/state";

export type ProfilePropsType = {
    postData: Array<PostDataType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost
                postData={props.postData}
            />
        </main>
    )
}
