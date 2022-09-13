import {
  addMessageActionCreator,
  MessagesDataType,
  updateNewMessageActionCreator,
} from '../../../redux/messagePage-reducer';
import { Message } from './Message';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../../redux/redux-store';

export type MapStateToPropsType = {
  messagesData: Array<MessagesDataType>;
  newMessage: string;
  isAuth: boolean
};

export type MapDispatchToPropsType = {
  onClick: () => void;
  onChange: (newMessage: string) => void;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    messagesData: state.messagesPage.messagesData,
    newMessage: state.messagesPage.newMessage,
    isAuth: state.auth.isAuth // достаем эту переменную для редиректа (залогинились или нет)

  };
};
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onClick: () => {
      dispatch(addMessageActionCreator());
    },
    onChange: (newMessage: string) => {
      dispatch(updateNewMessageActionCreator(newMessage));
    },
  };
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
