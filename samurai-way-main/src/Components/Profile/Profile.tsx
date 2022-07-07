import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostDataType} from "../../redax/state";

export type ProfilePropsType = {
    postData: Array<PostDataType>
    newText: string
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost
                postData={props.postData}
                newText={props.newText}
                dispatch={props.dispatch}
            />
        </main>
    )
}
