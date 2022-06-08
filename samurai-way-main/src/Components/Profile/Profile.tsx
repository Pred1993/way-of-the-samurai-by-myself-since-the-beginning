import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";

export const Profile = () => {
    return (
        <main className={classes.gridContent}>
            <div>
                <img className={classes.imageM} src="https://million-wallpapers.ru/wallpapers/4/53/17360535230983964874/olen-na-prirode-na-fone-zakata.jpg"
                     alt="main"/>
            </div>
            <MyPost/>
        </main>
    )
}
