import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../Common/FormsControls/FormsControls';

export type AddNewPostFormType = {
  newPost: string;
};
const maxLength10 = maxLengthCreator(10);
export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Enter new post'}
          name={'newPost'}
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <button>Add post</button>
      <button>Remove</button>
    </form>
  );
};
