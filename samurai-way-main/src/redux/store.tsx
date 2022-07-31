import profilePageReducer, {addPostActionCreator, updateNewPostTextActionCreator,} from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import messagePageReducer, {addMessageActionCreator, updateNewMessageActionCreator,} from "./messagePage-reducer";
import {followUsersAC, setUsersAC, unfollowUsersAC,} from "./usersPage-reducer";

type MessagesDataType = {
    id: number
    message: string
}
type DialogsDataType = {
    id: number
    name: string
    img: string
}
type PostDataType = {
    id: number
    message: string
    likesCounts: number
    img: string
}
type ProfilePageType = {
    postData: Array<PostDataType>
    newText: string
}
type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessage: string
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: any
}

type StoreType = {
    _state: StateType
    _rerenderEntireTree: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
type SetUsersACType = ReturnType<typeof setUsersAC>
type UnfollowUsersACType = ReturnType<typeof unfollowUsersAC>
type FollowUsersACType = ReturnType<typeof followUsersAC>
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageActionCreator>

export type ActionType =
    AddPostActionType
    | UpdateNewPostTextType
    | AddMessageActionType
    | UpdateNewMessageActionType
    | FollowUsersACType
    | UnfollowUsersACType
    | SetUsersACType

export let store: StoreType = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)
        this._rerenderEntireTree(this._state)
    }
}



