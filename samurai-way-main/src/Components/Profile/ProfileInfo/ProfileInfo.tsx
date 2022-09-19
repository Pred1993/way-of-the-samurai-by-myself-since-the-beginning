import classes from './ProfileInfo.module.css';
import React from 'react';
import { ProfileUsersType } from '../../../redux/profilePage-reducer';
import Preloader from '../../Common/Preloader';
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
  profileUsers: ProfileUsersType;
};
export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profileUsers.userId) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        {/*<img*/}
        {/*  className={classes.imageM}*/}
        {/*  src="https://million-wallpapers.ru/wallpapers/4/53/17360535230983964874/olen-na-prirode-na-fone-zakata.jpg"*/}
        {/*  alt="main"*/}
        {/*/>*/}
        <div className={classes.descriptionBlock}>
          <img src={props.profileUsers.photos.large}/>
          <ProfileStatus status={'Hello my friends'}/>
        </div>
      </div>
    </div>
  );
};
