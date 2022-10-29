import classes from './Message.module.css';
import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from './Message.Container';
import AddMessageForm, {AddMessageFormDataType} from "./AddMessageForm";
import {reduxForm} from "redux-form";

export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType;

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'newMessageBody'})(AddMessageForm)

export const Message = (props: MessagePropsType) => {
  const onSubmit = (formData: AddMessageFormDataType) => {
    props.sendMessage(formData);
  };
  let resultMessage = props.messagesData.map((t) => (
    <div className={classes.message} key={t.id}>
      {t.message}
    </div>
  ));
  // Колбеки нам больше не нужны так как редаксФорм заменяет нам наши сообщения своим редьюсером в котором реализованы сообщения
  // const onClickHandlerMessage = () => {
  //   props.onClick();
  // };
  // const onChangeHandlerNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let newMessage = e.currentTarget.value;
  //   props.onChange(newMessage);
  // }
  // if (!props.isAuth) return <Redirect to={'/login'}/>
  return (
    <div>
      {resultMessage}
      <AddMessageFormRedux onSubmit={onSubmit}/>
    </div>
  );
};
