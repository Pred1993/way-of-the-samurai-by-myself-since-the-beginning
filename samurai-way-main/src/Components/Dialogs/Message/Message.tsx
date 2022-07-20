import classes from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {MapDispatchToPropsType, MapStateToPropsType} from "./Message.Container";


export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType

export const Message = (props: MessagePropsType) => {
    debugger
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