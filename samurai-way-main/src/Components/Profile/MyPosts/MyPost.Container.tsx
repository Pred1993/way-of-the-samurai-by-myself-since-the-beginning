import {addPost, PostDataType} from '../../../redux/profilePage-reducer';
import {MyPost} from './MyPost';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {AddNewPostFormType} from "./Post/AddNewPostForm";

export type mapStateToPropsType = {
  postData: Array<PostDataType>;
  // newText: string;
};

export type mapDispatchToPropsType = {
  // updateNewPostText: (text: string) => void;
  addPost: (newPost: AddNewPostFormType) => void;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    postData: state.profilePage.postData
  };
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: (newPost: AddNewPostFormType) => {
      dispatch(addPost(newPost.newPost));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
