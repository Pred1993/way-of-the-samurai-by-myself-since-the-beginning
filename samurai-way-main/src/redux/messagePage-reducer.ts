import {ActionType, MessagesPageType} from "./store";

export const AddMessageActionCreator = () => ({type: "ADD-MESSAGE"}) as const

export const UpdateNewMessageActionCreator = (newMessage: string) =>
    ({
        type: "UPDATE-NEW-MESSAGE",
        newMessage: newMessage
    }) as const

let initialState =  {
    dialogsData: [
        {
            id: 1,
            name: 'Artem',
            img: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png'
        },
        {
            id: 2,
            name: 'Denis',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/831191113317295.60253312928ed.jpg'
        },
        {
            id: 3,
            name: 'Elena',
            img: 'https://static3.tgstat.ru/channels/_0/22/227399b151c2a39bdff1a81610dfd75a.jpg'
        },
        {
            id: 4,
            name: 'Igor', img:
                'https://abrakadabra.fun/uploads/posts/2021-11/1636651853_5-abrakadabra-fun-p-krasivie-avatarki-iz-pinteresta-7.jpg'
        },
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Nice'},
        {id: 3, message: 'Good morning'},
        {id: 4, message: 'How are you?'},
    ],
    newMessage: ''
}

const messagePageReducer = (state: MessagesPageType = initialState, action: ActionType) => {
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