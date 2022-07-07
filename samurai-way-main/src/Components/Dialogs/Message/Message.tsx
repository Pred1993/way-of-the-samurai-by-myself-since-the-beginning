import classes from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {MessagesDataType} from "../../../redax/state";

export type MessagePropsType = {
    messagesData: Array<MessagesDataType>
    updateNewMessage: (newMessage: string) => void
    addMessage: () => void
    newMessage: string
}


export const Message = (props: MessagePropsType) => {
    let resultMessage = props.messagesData.map(t =>
        <div className={classes.message} key={t.id}>
            {t.message}
        </div>
    )

    const onClickHandlerMessage = () => {
       props.addMessage()
    }
    const onChangeHandlerNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }
    return (
        <div>
            {resultMessage}
            <div><textarea onChange={onChangeHandlerNewMessage} value={props.newMessage}/></div>
            <button onClick={onClickHandlerMessage}>Add post</button>
        </div>
    )
}