import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/naruto-218x256.png';
import { UsersType } from '../../redux/usersPage-reducer';
import { NavLink } from 'react-router-dom';
import { followUsers, UnfollowUsers } from '../../api/api';

type UsersCleanPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (p: number) => void;
  users: Array<UsersType>;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void;
  followingInProgress: Array<number>;
};

const UsersClean = (props: UsersCleanPropsType) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div>
        {slicedPages.map((p, index) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? classes.selectedPage : ''}
              key={index}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => {
          const onClickHandlerFollow = () => {
            props.toggleIsFollowingProgress(true, u.id);
            followUsers(u.id).then((response) => {
              if (response.resultCode === 0) {
                props.follow(u.id);
              }
              props.toggleIsFollowingProgress(false, u.id);
            });
          };
          const onClickHandlerUnFollow = () => {
            props.toggleIsFollowingProgress(true, u.id);
            UnfollowUsers(u.id).then((response) => {
              if (response.resultCode === 0) {
                props.unfollow(u.id);
              }
              props.toggleIsFollowingProgress(false, u.id);
            });
          };
          return (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                    <img className={classes.img} src={u.photos.small !== null ? u.photos.small : userPhoto} />
                  </NavLink>
                </div>
                <div>
                  {u.followed ? (
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={onClickHandlerUnFollow}>
                      Unfollow
                    </button>
                  ) : (
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={onClickHandlerFollow}>
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  {/*<div>{u.location.country}</div>*/}
                  {/*<div>{u.location.city}</div>*/}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersClean;
