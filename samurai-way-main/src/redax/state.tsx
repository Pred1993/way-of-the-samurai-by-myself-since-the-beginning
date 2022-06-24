
export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
    img: string
}
export type PostDataType = {
    id: number
    message: string
    likesCounts: number
    img: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newText: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessage: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: StateType = {
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
            {id: 1, name: 'Artem', img: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png'},
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
}
let rerenderEntireTree = (state: StateType) => {
    console.log('awdawd')
}

export const addPost = () => {
    const newObjectPostData: PostDataType = {
        id: 6,
        message: state.profilePage.newText,
        likesCounts: 5,
        img: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png'
    }
    state.profilePage.postData.push(newObjectPostData)
    state.profilePage.newText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {

    state.profilePage.newText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const newObjectMessageData = {
        id: 1, message: state.messagesPage.newMessage
    }
    state.messagesPage.messagesData.push(newObjectMessageData)
    state.messagesPage.newMessage = ''
    rerenderEntireTree(state)
}

export const updateNewMessage = (newMessage: string) => {
    state.messagesPage.newMessage = newMessage
    rerenderEntireTree(state)
}

export const subscriber = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}

