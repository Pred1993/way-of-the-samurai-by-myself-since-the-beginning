import classes from "./Message.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
export type MessageDataType = {
    message: string
    id: number
}
export type MessageDataPropsType = {
    messagesData: Array<MessageDataType>
}
export const Message = (props:MessageDataPropsType) => {
    let resultMessage = props.messagesData.map((t) => {
        return (
            <div className={classes.message} key={t.id}>
                {t.message}
            </div>
        )
    })
    return (
        <div>
            {resultMessage}
        </div>
    )
}