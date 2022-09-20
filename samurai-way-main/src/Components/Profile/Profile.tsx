import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPost.Container';
import {PropsType} from "./Profile.Container";

export type ProfileUsersType = {
    profileUsers: PropsType
}
export const Profile = (props: ProfileUsersType) => {
    return (
        <main>
            <ProfileInfo profileUsers={props.profileUsers.profileUsers}
                         status={props.profileUsers.status}
                         updateProfileStatusThunkCreator={props.profileUsers.updateProfileStatusThunkCreator}/>
            <MyPostContainer/>
        </main>
    );
};
