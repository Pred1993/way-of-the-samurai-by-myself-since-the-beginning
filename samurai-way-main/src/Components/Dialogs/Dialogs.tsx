import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redax/state";

export type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    addMessage: () => void
    updateNewMessage: (newMessage: string) => void
    newMessage: string
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem dialogsData={props.dialogsData}/>
            </div>
            <div className={classes.messages}>
                <Message messagesData={props.messagesData}
                         addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}
                         newMessage={props.newMessage}
                />
            </div>
        </div>
    )
}