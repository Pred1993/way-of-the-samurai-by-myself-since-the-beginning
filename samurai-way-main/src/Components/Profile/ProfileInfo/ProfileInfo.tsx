import classes from "./ProfileInfo.module.css";
import React from "react";
import {ProfileUsersType} from "../../../redux/profilePage-reducer";

type ProfileInfoPropsType = {
    profileUsers: ProfileUsersType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={classes.imageM}
                     src="https://million-wallpapers.ru/wallpapers/4/53/17360535230983964874/olen-na-prirode-na-fone-zakata.jpg"
                     alt="main"/>
                <div className={classes.descriptionBlock}>
                    <img src={props.profileUsers.photos.large}/>
                </div>
            </div>
        </div>
    )
}