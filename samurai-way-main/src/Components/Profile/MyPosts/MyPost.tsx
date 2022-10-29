import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {mapDispatchToPropsType, mapStateToPropsType} from './MyPost.Container';
import {AddNewPostForm, AddNewPostFormType} from "./Post/AddNewPostForm";
import {reduxForm} from "redux-form";

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType;

const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({
    form: 'newPost',
})(AddNewPostForm);

export const MyPost = (props: MyPostPropsType) => {
    const onSubmit = (formData: AddNewPostFormType) => {
       props.addPost(formData)
    };
  return (
    <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onSubmit}/>
        <div className={classes.posts}>
            <Post postData={props.postData}/>
        </div>
    </div>
  );
};
