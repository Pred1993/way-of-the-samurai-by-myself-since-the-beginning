import {ActionType, PostDataType, ProfilePageType} from "./store";

export const AddPostActionCreator = () => ({type: "ADD-POST"}) as const

export const UpdateNewPostTextActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

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
    ],
    newText: ''
}

const profilePageReducer = (state : ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newObjectPostData: PostDataType = {
                id: 6,
                message: state.newText,
                likesCounts: 5,
                img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
            }
            state.postData.push(newObjectPostData)
            state.newText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newText = action.newText
            return state
        default:
            return state
    }
}

export default profilePageReducer