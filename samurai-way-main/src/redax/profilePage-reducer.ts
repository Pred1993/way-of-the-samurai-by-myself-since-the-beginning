import {ActionType, PostDataType, ProfilePageType} from "./state";

export const AddPostActionCreator = () => ({type: "ADD-POST"}) as const

export const UpdateNewPostTextActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const



const profilePageReducer = (state: ProfilePageType, action: ActionType) => {
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