import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {StoreReduxType} from "../../redux/redux-store";
import {MessageContainer} from "./Message/Message.Container";

export type DialogsPropsType = {
    // dialogsData: Array<DialogsDataType>
    // messagesData: Array<MessagesDataType>
    // dispatch: (action: ActionType) => void
    // newMessage: string
    store: StoreReduxType
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem
                    // dialogsData={props.dialogsData}
                    dialogsData={props.store.getState().messagesPage.dialogsData}
                />
            </div>
            <div className={classes.messages}>
                <MessageContainer
                    // messagesData={props.messagesData}
                    // newMessage={props.newMessage}
                    // dispatch={props.dispatch}
                    store={props.store}
                />
            </div>
        </div>
    )
}