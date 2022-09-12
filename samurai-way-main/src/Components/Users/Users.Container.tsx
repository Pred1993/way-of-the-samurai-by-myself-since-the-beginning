import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
  followUsers, followUsersThunkCreator,
  getUsersThunkCreator,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress,
  unfollowUsers, unFollowUsersThunkCreator,
  UsersType,
} from '../../redux/usersPage-reducer';
import UsersClean from './UsersClean';
import Preloader from '../Common/Preloader';

export type mapStateToPropsType = {
  users: Array<UsersType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

export type mapDispatchToPropsType = {
  // followUsers: (userID: number) => void;
  // unfollowUsers: (userID: number) => void;
  // setUsers: (users: Array<UsersType>) => void;
  setCurrentPage: (currentPage: number) => void;
  // setTotalCount: (totalCount: number) => void;
  // toggleIsFetching: (isFetching: boolean) => void;
  // toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
  followUsersThunkCreator: (userId: number) => void
  unFollowUsersThunkCreator: (userId: number) => void
};
type UsersContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    //
    // getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(response.items);
    //   this.props.setTotalCount(response.totalCount);
    // });
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

  }

  onPageChanged = (p: number) => {
    // this.props.toggleIsFetching(true);
    // getUsers(p, this.props.pageSize).then((response) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(response.items);
    // });
    this.props.getUsersThunkCreator(p, this.props.pageSize);
    this.props.setCurrentPage(p)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersClean
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          // unfollowUsers={this.props.unfollowUsers}
          // followUsers={this.props.followUsers}
          // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          followUsersThunkCreator={this.props.followUsersThunkCreator}
          unFollowUsersThunkCreator={this.props.unFollowUsersThunkCreator}
        />
      </>
    );
  }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//       followUsers: (userID: number) => {
//             dispatch(followUsers(userID))
//         },
//       unfollowUsers: (userID: number) => {
//             dispatch(unfollowUsers(userID))
//         },
//       setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsers(users))
//         },
//       setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//       setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCount(totalCount))
//         },
//       toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         },
//       toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => {
//         dispatch(toggleIsFollowingProgress(followingInProgress, userId))
//       }
//     }
// }

export default connect(mapStateToProps, {setCurrentPage, getUsersThunkCreator, followUsersThunkCreator, unFollowUsersThunkCreator})(UsersContainer);
