import React from 'react';
import LoginForm, { FormDataType } from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginThunkCreator, logoutThunkCreator } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

export type mapDispatchToPropsType = {
  loginThunkCreator: (formData: FormDataType) => void;
};
export type mapStateToPropsType = {
  isAuth: boolean;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export type LoginPropsType = mapDispatchToPropsType & mapStateToPropsType;

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginThunkCreator(formData);
  };
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login);
