import React from "react";
import classes from './Post.module.css'
import {PostDataType} from "../../../../redux/profilePage-reducer";

export type PostPropsType = {
    postData: Array<PostDataType>
}
export const Post = (props: PostPropsType) => {
    let resultPost = props.postData.map(t =>
        <div className={classes.item} key={t.id}>
            <img
                src={t.img} alt={''}/>
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