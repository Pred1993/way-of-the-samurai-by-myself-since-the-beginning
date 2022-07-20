import {ActionType} from "./store";

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    photoUrl: string
    location: {
        city: string
        country: string
    },
    test: string
}

export type InitialStateType = typeof initialState

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Artem',
            status: 'Life is beautiful',
            photoUrl: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Ilya',
            status: 'Life is beautiful',
            photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/831191113317295.60253312928ed.jpg',
            location: {city: 'Volgograd', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrey',
            status: 'Life is beautiful',
            photoUrl: 'https://static3.tgstat.ru/channels/_0/22/227399b151c2a39bdff1a81610dfd75a.jpg',
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Maxim',
            status: 'Life is beautiful',
            photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-11/1636651853_5-abrakadabra-fun-p-krasivie-avatarki-iz-pinteresta-7.jpg',
            location: {city: 'Tbilisi', country: 'Georgia'}
        }
    ] as Array<UsersType>,
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

export const FollowUsersAC = (userID: number) => (
    {
        type: "FOLLOW",
        userID: userID
    }) as const

export const UnfollowUsersAC = (userID: number) => ({
    type: "UNFOLLOW",
    userID: userID
}) as const

export const SetUsersAC = (users: Array<UsersType>) => (
    {
        type: "SET-USERS",
        users: users
    }
) as const

