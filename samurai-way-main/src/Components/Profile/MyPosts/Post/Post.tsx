import React from "react";
import classes from './Post.module.css'

export type PostDataType = {
    message: string
    likesCounts: number
    id: number
    img: string
}
export type PostPropsType = {
    postData: Array<PostDataType>
}
export const Post = (props: PostPropsType) => {
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