import React from "react";
import {
    AddMessageActionCreator, MessagesDataType,
    UpdateNewMessageActionCreator
} from "../../../redux/messagePage-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

export type MapStateToProps = {
    messagesData: Array<MessagesDataType>,
    newMessage: string
}

export type MapDispatchToPropsType = {
    onClick: () => void
    onChange: (newMessage: string) => void
}


let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessage: state.messagesPage.newMessage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClick: () => {dispatch(AddMessageActionCreator())},
        onChange: (newMessage: string) => {dispatch(UpdateNewMessageActionCreator(newMessage))}
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer