import {ActionType} from "./store";

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string | null
    photos: {
        large: string | undefined
        small: string | undefined
    }
    uniqueUrlName: null | string
}

export type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UsersType>,
}


export const usersPageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followUsersAC = (userID: number) => (
    {
        type: "FOLLOW",
        userID: userID
    }) as const

export const unfollowUsersAC = (userID: number) => ({
    type: "UNFOLLOW",
    userID: userID
}) as const

export const setUsersAC = (users: Array<UsersType>) => (
    {
        type: "SET-USERS",
        users: users
    }
) as const

