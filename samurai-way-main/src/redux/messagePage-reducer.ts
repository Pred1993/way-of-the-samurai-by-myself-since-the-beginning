export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' } as const);

export const updateNewMessageActionCreator = (newMessage: string) =>
  ({
    type: 'UPDATE-NEW-MESSAGE',
    newMessage: newMessage,
  } as const);

type AddMessageACType = ReturnType<typeof addMessageActionCreator>;
type UpdateNewMessageACType = ReturnType<typeof updateNewMessageActionCreator>;

export type ActionMessagePageType = AddMessageACType | UpdateNewMessageACType
  
export type DialogsDataType = {
  id: number;
  name: string;
  img: string;
};

export type MessagesDataType = {
  id: number;
  message: string;
};
export type MessagesPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  newMessage: string;
};
export type InitialStateType = MessagesPageType;

let initialState: InitialStateType = {
  dialogsData: [
    {
      id: 1,
      name: 'Artem',
      img: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png',
    },
    {
      id: 2,
      name: 'Denis',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/831191113317295.60253312928ed.jpg',
    },
    {
      id: 3,
      name: 'Elena',
      img: 'https://static3.tgstat.ru/channels/_0/22/227399b151c2a39bdff1a81610dfd75a.jpg',
    },
    {
      id: 4,
      name: 'Igor',
      img: 'https://abrakadabra.fun/uploads/posts/2021-11/1636651853_5-abrakadabra-fun-p-krasivie-avatarki-iz-pinteresta-7.jpg',
    },
  ],
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Nice' },
    { id: 3, message: 'Good morning' },
    { id: 4, message: 'How are you?' },
  ],
  newMessage: '',
};

const messagePageReducer = (state: InitialStateType = initialState, action: ActionMessagePageType): InitialStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      const newObjectMessageData = {
        id: 5,
        message: state.newMessage,
      };
      return { ...state, messagesData: [...state.messagesData, newObjectMessageData], newMessage: '' };
    case 'UPDATE-NEW-MESSAGE':
      return { ...state, newMessage: action.newMessage };
    default:
      return state;
  }
};
export default messagePageReducer;
