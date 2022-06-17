import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../redax/state";
export type DialogItemPropsType = {
    dialogsData:Array<DialogsDataType>
}

export const DialogItem = (props:DialogItemPropsType) => {
    const resultDialogItem = props.dialogsData.map((t) => {
        let path = `/dialogs/${t.id}`
        return (
            <div className={classes.dialog} key={t.id}>
                <img src={t.img} alt="avatar"/>
                <br/>
                <NavLink to={path}>{t.name}</NavLink>
            </div>)
    })
    return (
        <div>
            {resultDialogItem}
        </div>
    )
}