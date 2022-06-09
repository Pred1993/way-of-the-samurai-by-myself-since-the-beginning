import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem, DialogsDataType} from "./DialogItem/DialogItem";
import {Message, MessageDataType} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Nikolay'}
    ]

    let messagesData: Array<MessageDataType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Nice'},
        {id: 3, message: 'Good morning'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Ok!'}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem dialogsData={dialogsData}/>
            </div>
            <div className={classes.messages}>
                <Message messagesData={messagesData}/>
            </div>
        </div>
    )
}