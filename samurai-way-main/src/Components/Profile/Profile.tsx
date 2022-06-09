import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost/>
        </main>
    )
}
