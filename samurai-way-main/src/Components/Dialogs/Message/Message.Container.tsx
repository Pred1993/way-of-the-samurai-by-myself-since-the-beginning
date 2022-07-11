import React from "react";
import {AddMessageActionCreator, UpdateNewMessageActionCreator} from "../../../redux/messagePage-reducer";
import {Message} from "./Message";
import {StoreReduxType} from "../../../redux/redux-store";

export type MessageContainerPropsType = {
    store: StoreReduxType
}


export const MessageContainer = (props: MessageContainerPropsType) => {

    const onClickHandlerMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
    }
    const onChangeHandlerNewMessage = (newMessage: string) => {
        props.store.dispatch(UpdateNewMessageActionCreator(newMessage))
    }
    return (
        <Message
            messagesData={props.store.getState().messagesPage.messagesData}
            newMessage={props.store.getState().messagesPage.newMessage}
            onClick={onClickHandlerMessage}
            onChange={onChangeHandlerNewMessage}
        />
    )
}