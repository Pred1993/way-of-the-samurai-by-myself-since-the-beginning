import {ActionType} from "./store";

export const addPost = () => ({type: "ADD-POST"}) as const

export const updateNewPostText = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

export const setProfileUsers = (profileUsers: ProfileUsersType) => ({
    type: 'SET-PROFILE-USERS',
    profileUsers: profileUsers
}) as const

export type ProfileUsersType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram:string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink:string | null
    }
    photos: {
        small: string | undefined
        large: string | undefined
    }
    aboutMe: string
}


export type PostDataType = {
    id: number
    message: string
    likesCounts: number
    img: string
}
export type InitialStateType = typeof initialState

let initialState =  {
    postData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCounts: 5,
            img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
        },
        {
            id: 2,
            message: 'Where shall we meet?',
            likesCounts: 10,
            img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
        },
        {
            id: 3,
            message: 'I owe you one',
            likesCounts: 15,
            img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
        },
        {
            id: 4,
            message: 'Good luck',
            likesCounts: 20,
            img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
        },
        {
            id: 5,
            message: 'Сondemn',
            likesCounts: 5,
            img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
        }
    ] as Array<PostDataType>,
    newText: '',
    profileUsers: {} as ProfileUsersType
}

const profilePageReducer = (state : InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newObjectPostData: PostDataType = {
                id: 6,
                message: state.newText,
                likesCounts: 5,
                img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
            }
            return {...state, postData: [...state.postData, newObjectPostData], newText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newText: action.newText}
        case 'SET-PROFILE-USERS':
            return {...state, profileUsers: action.profileUsers}
        default:
            return state
    }
}

export default profilePageReducer