import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPost.Container";

export const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostContainer/>
        </main>
    )
}
