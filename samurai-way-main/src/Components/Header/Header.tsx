import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";

export const Header = (props: mapStateToPropsType) => {
    return (
        <header className={classes.gridHeader}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="logo"/>
            <div className={classes.loginBlock}>
                {props.data.isAuth ? props.data.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
