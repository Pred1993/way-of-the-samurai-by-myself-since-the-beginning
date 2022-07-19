import {ActionType} from "./store";

export const AddPostActionCreator = () => ({type: "ADD-POST"}) as const

export const UpdateNewPostTextActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

export type ProfilePageType = {
    postData: Array<PostDataType>
    newText: string
}

export type PostDataType = {
    id: number
    message: string
    likesCounts: number
    img: string
}
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
    newText: ''
}
export type InitialStateType = typeof initialState

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
        default:
            return state
    }
}

export default profilePageReducer