import React from 'react';
import {mapDispatchToPropsType, mapStateToPropsType} from "./Users.Container";
import classes from './Users.module.css'
type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType



const Users = (props: UsersPropsType) => {
    let usersMap = props.users.map(u => {
        return (
            <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.img} src={u.photoUrl}  alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            :<button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
        )
    })
    return (
        <div>
            {usersMap}
        </div>
    );
};

export default Users;