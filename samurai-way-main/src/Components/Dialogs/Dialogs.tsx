import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redax/state";

export const Dialogs = (props: MessagesPageType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem dialogsData={props.dialogsData}/>
            </div>
            <div className={classes.messages}>
                <Message messagesData={props.messagesData}/>
            </div>
        </div>
    )
}