import classes from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {MessagesDataType} from "../../../redux/store";

export type MessagePropsType = {
    messagesData: Array<MessagesDataType>
    newMessage: string
    onClick: () => void
    onChange: (newMessage: string) => void
}


export const Message = (props: MessagePropsType) => {
    let resultMessage = props.messagesData.map(t =>
        <div className={classes.message} key={t.id}>
            {t.message}
        </div>
    )
    const onClickHandlerMessage = () => {
       props.onClick()
    }
    const onChangeHandlerNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.onChange(newMessage)
    }
    return (
        <div>
            {resultMessage}
            <div><textarea onChange={onChangeHandlerNewMessage} value={props.newMessage}/></div>
            <button onClick={onClickHandlerMessage}>Add post</button>
        </div>
    )
}