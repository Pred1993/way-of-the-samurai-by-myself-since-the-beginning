import classes from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.imageM}
                     src="https://million-wallpapers.ru/wallpapers/4/53/17360535230983964874/olen-na-prirode-na-fone-zakata.jpg"
                     alt="main"/>
                <div className={classes.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}