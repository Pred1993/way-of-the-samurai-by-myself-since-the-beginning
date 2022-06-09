import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: string
}
export const DialogItem = (props:DialogItemPropsType) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}