import React, { ComponentType } from 'react';
import {
  addMessageActionCreator,
  MessagesDataType,
} from '../../../redux/messagePage-reducer';
import { Message } from './Message';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { AppStateType } from '../../../redux/redux-store';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect';
import {AddMessageFormDataType} from "./AddMessageForm";

export type MapStateToPropsType = {
  messagesData: Array<MessagesDataType>;
  // newMessage: string
  // isAuth: boolean
};

export type MapDispatchToPropsType = {
  sendMessage: (formData: AddMessageFormDataType) => void;
  // onChange: (newMessage: string) => void;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    messagesData: state.messagesPage.messagesData,
    // newMessage: state.messagesPage.newMessage // больше нам не нужен после ввода ReduxForm
    // isAuth: state.auth.isAuth // достаем эту переменную для редиректа (залогинились или нет)
  };
};
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (formData: AddMessageFormDataType) => {
      dispatch(addMessageActionCreator(formData.newMessageBody));
    }
  };
};

// export default WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Message));
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Message);
