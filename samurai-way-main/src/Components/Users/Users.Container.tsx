import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followUsersAC, setUsersAC, unfollowUsersAC, UsersType} from "../../redux/usersPage-reducer";
import UsersC from "./UsersC";


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
            dispatch(followUsersAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowUsersAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
export default UsersContainer