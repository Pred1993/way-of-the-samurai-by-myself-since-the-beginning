import { connect } from 'react-redux';
import { DialogItem } from './DialogItem';
import { AppStateType } from '../../../redux/redux-store';
import { DialogsDataType } from '../../../redux/messagePage-reducer';

export type MapStateToProps = {
  dialogsData: Array<DialogsDataType>;
};

// export type MapDispatchToPropsType = {
//
// }

let mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    dialogsData: state.messagesPage.dialogsData,
  };
};
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//     }
// }

const DialogItemContainer = connect(mapStateToProps)(DialogItem);

export default DialogItemContainer;
