import React from "react";
import classes from './Dialogs.module.css'
import MessageContainer from "./Message/Message.Container";
import DialogItemContainer from "./DialogItem/DialogItem.Container";

// export type DialogsPropsType = {
//     // dialogsData: Array<DialogsDataType>
//     // messagesData: Array<MessagesDataType>
//     // dispatch: (action: ActionType) => void
//     // newMessage: string
//     store: StoreReduxType
// }
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItemContainer/>
            </div>
            <div className={classes.messages}>
                <MessageContainer/>
            </div>
        </div>
)
}