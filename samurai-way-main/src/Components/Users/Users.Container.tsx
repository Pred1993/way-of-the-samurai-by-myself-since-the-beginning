import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import {
  followUsers,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress,
  unfollowUsers,
  UsersType,
} from '../../redux/usersPage-reducer';
import UsersClean from './UsersClean';
import Preloader from '../Common/Preloader';
import { getUsers } from '../../api/api';

export type mapStateToPropsType = {
  users: Array<UsersType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

export type mapDispatchToPropsType = {
  followUsers: (userID: number) => void;
  unfollowUsers: (userID: number) => void;
  setUsers: (users: Array<UsersType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void;
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
    this.props.toggleIsFetching(true);

    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
      this.props.setTotalCount(response.totalCount);
    });
  }

  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);

    getUsers(p, this.props.pageSize).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
    });
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
          unfollow={this.props.unfollowUsers}
          follow={this.props.followUsers}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followUsersAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowUsersAC(userID))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
  followUsers,
  unfollowUsers,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
})(UsersContainer);
