import classes from "./Message.module.css";
import React from "react";
import {MessagesDataType} from "../../../redax/state";

export type MessagePropsType = {
    messagesData: Array<MessagesDataType>
}


export const Message = (props: MessagePropsType) => {
    let resultMessage = props.messagesData.map(t =>
        <div className={classes.message} key={t.id}>
            {t.message}
        </div>
    )
    let newMessageElement = React.createRef <HTMLTextAreaElement>()
const onClickHandlerMessage = () => {
        alert(newMessageElement.current?.value)
}
    return (
        <div>
            {resultMessage}
            <div><textarea ref={newMessageElement}></textarea></div>
            <button onClick={onClickHandlerMessage}>Add post</button>
        </div>
    )
}