import {ActionType} from "./store";


export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false // вводим для проверки пришли или нет наши данные
}

export const AuthReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth: true}
        // case "UNFOLLOW":
        //     return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        default:
            return state
    }
}

export const setUserData = (id: number, login: string, email: string) => (
    {
        type: "SET_USER_DATA",
        data: {
            id: id,
            login: login,
            email: email
        }
    }) as const

// export const unfollowUsers = (userID: number) => ({
//     type: "UNFOLLOW",
//     userID: userID
// }) as const

