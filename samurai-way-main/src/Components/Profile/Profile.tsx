import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, MessagesPageType, ProfilePageType} from "../../redux/store";
import {MyPostContainer} from "./MyPosts/MyPost.Container";
import {EmptyObject, Store} from "redux";

export type ProfilePropsType = {
    // postData: Array<PostDataType>
    // newText: string
    // dispatch: (action: ActionType) => void
    store:  Store<EmptyObject & {profilePage: ProfilePageType, messagesPage: MessagesPageType, sidebar: any}, ActionType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostContainer
                // postData={props.postData}
                // newText={props.newText}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </main>
    )
}
