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

    return (
        <div>
            {resultMessage}
        </div>
    )
}