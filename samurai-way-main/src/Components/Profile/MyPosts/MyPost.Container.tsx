import React from "react";
import {
    AddPostActionCreator,
    PostDataType,
    UpdateNewPostTextActionCreator
} from "../../../redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

export type mapStateToPropsType = {
    postData: Array<PostDataType>
    newText: string
}

export type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newText: state.profilePage.newText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer