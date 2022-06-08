import React from "react";
import classes from './Post.module.css'

export type PostPropsType = {
    message: string
    likesCounts: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src='https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'/>
            {props.message}
            <div><span>{props.likesCounts}</span></div>
        </div>
    )
}