import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { Input } from '../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

export type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
const maxLength10 = maxLengthCreator(10);
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength10]} />
      </div>
      <div>
        <Field placeholder={'Password'} component={Input} name={'password'} validate={[required, maxLength10]} />
      </div>
      <div>
        <Field name={'rememberMe'} type={'checkbox'} component={'input'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
