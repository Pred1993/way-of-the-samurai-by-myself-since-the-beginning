import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPost.Container';
import {PropsType} from "./Profile.Container";

type ProfilePropsType = {
  profileUsers: PropsType;
};

export const Profile = (props: ProfilePropsType) => {
    debugger
  return (
    <main>
      <ProfileInfo profileUsers={props.profileUsers.profileUsers} />
      <MyPostContainer />
    </main>
  );
};
