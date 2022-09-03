import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPost.Container';
import { ProfileUsersType } from '../../redux/profilePage-reducer';

type ProfilePropsType = {
  profileUsers: ProfileUsersType;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <main>
      <ProfileInfo profileUsers={props.profileUsers} />
      <MyPostContainer />
    </main>
  );
};
