import React from "react";
import classes from './Post.module.css'
import {ProfilePropsType} from "../../Profile";

export const Post = (props: ProfilePropsType) => {
    let resultPost = props.postData.map(t =>
        <div className={classes.item} key={t.id}>
            <img
                src={t.img}/>
            {t.message}
            <div><span>{t.likesCounts}</span></div>
        </div>
    )
    return (
        <div>
            {resultPost}
        </div>
    )
}