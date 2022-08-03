import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPost.Container";
import {ProfileContainerPropsType} from "./ProfileInfo/Profile.Container";

export const Profile = (props: ProfileContainerPropsType) => {
    return (
        <main>
            <ProfileInfo  profileUsers={props.profileUsers}/>
            <MyPostContainer/>
        </main>
    )
}
