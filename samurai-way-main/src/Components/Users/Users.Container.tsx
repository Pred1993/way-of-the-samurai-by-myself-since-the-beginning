import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {FollowUsersAC, SetUsersAC, UnfollowUsersAC, UsersType} from "../../redux/usersPage-reducer";


export type mapStateToPropsType = {
    users: Array<UsersType>
}

export type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(FollowUsersAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(UnfollowUsersAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer