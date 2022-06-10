import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem, DialogsDataType} from "./DialogItem/DialogItem";
import {Message, MessageDataType} from "./Message/Message";
export type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessageDataType>
}

export const Dialogs = (props:DialogsPropsType) => {
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