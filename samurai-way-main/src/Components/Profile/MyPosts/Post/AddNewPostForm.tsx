import React from "react";
import {Field, InjectedFormProps} from "redux-form";

export type AddNewPostFormType = {
    newPost: string
};

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter new post'} name={'newPost'} component={'textarea'}/>
        </div>
        <button>Add post</button>
        <button>Remove</button>
    </form>;
}