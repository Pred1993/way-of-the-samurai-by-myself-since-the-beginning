import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/naruto-218x256.png';
import {UsersType} from '../../redux/usersPage-reducer';
import {NavLink} from 'react-router-dom';

type UsersCleanPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (p: number) => void;
  users: Array<UsersType>;
  // unfollowUsers: (id: number) => void;
  // followUsers: (id: number) => void;
  // toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void;
  followingInProgress: Array<number>;
  followUsersThunkCreator: (userId: number) => void
  unFollowUsersThunkCreator: (userId: number) => void
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
              onClick={() => {
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
            // props.toggleIsFollowingProgress(true, u.id);
            // follow(u.id).then((response) => {
            //   if (response.resultCode === 0) {
            //     props.followUsers(u.id);
            //   }
            //   props.toggleIsFollowingProgress(false, u.id);
            // });
            props.followUsersThunkCreator(u.id)
          };
          const onClickHandlerUnFollow = () => {
            // props.toggleIsFollowingProgress(true, u.id);
            // unfollow(u.id).then((response
            // ) => {
            //   if (response.resultCode === 0) {
            //     props.unfollowUsers(u.id);
            //   }
            //   props.toggleIsFollowingProgress(false, u.id);
            // });
            props.unFollowUsersThunkCreator(u.id)
          };
          return (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                    <img alt={''} className={classes.img} src={u.photos.small !== null ? u.photos.small : userPhoto} />
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
