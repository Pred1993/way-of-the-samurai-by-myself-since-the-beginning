import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { Input } from '../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './../../Common/FormsControls/FormControls.module.css';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
const maxLength100 = maxLengthCreator(100);
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength100]} />
      </div>
      <div>
        <Field placeholder={'Password'} component={Input} name={'password'} validate={[required, maxLength100]} />
      </div>
      <div>
        <Field name={'rememberMe'} type={'checkbox'} component={'input'} /> remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
