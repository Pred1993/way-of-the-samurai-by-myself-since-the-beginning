import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthContainerPropsType } from './HeaderContainer';

export const Header = (props: AuthContainerPropsType) => {
  const onClickHandler = () => {
    props.logoutThunkCreator();
  };
  return (
    <header className={classes.gridHeader}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="logo" />
      <div className={classes.loginBlock}>
        {props.data.isAuth ? (
          <div>
            {props.data.login}
            <button onClick={onClickHandler}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
