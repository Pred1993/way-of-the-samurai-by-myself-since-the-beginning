import React from 'react';
import classes from './Dialogs.module.css';
import MessageContainer from './Message/Message.Container';
import DialogItemContainer from './DialogItem/DialogItem.Container';
import {useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

// export type DialogsPropsType = {
//     // dialogsData: Array<DialogsDataType>
//     // messagesData: Array<MessagesDataType>
//     // dispatch: (action: ActionType) => void
//     // newMessage: string
//     store: StoreReduxType
// }
export const Dialogs = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)

  if (!isAuth) {
    return <Redirect to={'/login'} />;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <DialogItemContainer />
      </div>
      <div className={classes.messages}>
        <MessageContainer />
      </div>
    </div>
  );
};
