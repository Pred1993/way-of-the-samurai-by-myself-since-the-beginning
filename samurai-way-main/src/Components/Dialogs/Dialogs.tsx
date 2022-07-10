import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsDataType, MessagesDataType} from "../../redux/store";

export type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (action: ActionType) => void
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
                         newMessage={props.newMessage}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}