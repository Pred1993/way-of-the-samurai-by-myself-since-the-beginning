import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={'Artem'} id={'1'}/>
                <DialogItem name={'Denis'} id={'2'}/>
                <DialogItem name={'Elena'} id={'3'}/>
                <DialogItem name={'Igor'} id={'4'}/>
                <DialogItem name={'Nikolay'} id={'5'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hello'}/>
                <Message message={'Nice'}/>
                <Message message={'Good morning'}/>
                <Message message={'How are you?'}/>
                <Message message={'Ok!'}/>
            </div>
        </div>
    )
}