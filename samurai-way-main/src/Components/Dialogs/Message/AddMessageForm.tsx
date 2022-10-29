import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormDataType = {
    newMessageBody: string
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter yuo message'}/>
            <button>Add post</button>
        </form>
    );
};

export default AddMessageForm;