import classes from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {ActionType, MessagesDataType} from "../../../redax/state";

export type MessagePropsType = {
    messagesData: Array<MessagesDataType>
    newMessage: string
    dispatch: (action: ActionType) => void
}


export const Message = (props: MessagePropsType) => {
    let resultMessage = props.messagesData.map(t =>
        <div className={classes.message} key={t.id}>
            {t.message}
        </div>
    )
    const onClickHandlerMessage = () => {
       props.dispatch({type: "ADD-MESSAGE"})
    }
    const onChangeHandlerNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-MESSAGE", newMessage: e.currentTarget.value})
    }
    return (
        <div>
            {resultMessage}
            <div><textarea onChange={onChangeHandlerNewMessage} value={props.newMessage}/></div>
            <button onClick={onClickHandlerMessage}>Add post</button>
        </div>
    )
}