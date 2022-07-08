import {ActionType, MessagesPageType} from "./state";

export const AddMessageActionCreator = () => ({type: "ADD-MESSAGE"}) as const

export const UpdateNewMessageActionCreator = (newMessage: string) =>
    ({
        type: "UPDATE-NEW-MESSAGE",
        newMessage: newMessage
    }) as const

const messagePageReducer = (state: MessagesPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newObjectMessageData = {
                id: 5, message: state.newMessage
            }
            state.messagesData.push(newObjectMessageData)
            state.newMessage = ''
            return state
        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }
}
export default messagePageReducer