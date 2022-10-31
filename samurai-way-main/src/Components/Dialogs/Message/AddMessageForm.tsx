import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

export type AddMessageFormDataType = {
  newMessageBody: string;
};
const maxLength100 = maxLengthCreator(100);
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={'newMessageBody'}
        placeholder={'Enter yuo message'}
        validate={[required, maxLength100]}
      />
      <button>Add post</button>
    </form>
  );
};

export default AddMessageForm;
