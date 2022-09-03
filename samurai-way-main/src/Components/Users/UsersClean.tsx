import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/naruto-218x256.png";
import {UsersType} from "../../redux/usersPage-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersCleanPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const UsersClean = (props: UsersCleanPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)

    return (
        <div>
            <div>
                {slicedPages.map((p, index) => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? classes.selectedPage : ''} key={index}>{p}</span>
                })}
            </div>
            <div>
                {props.users.map(u => {
                    const onClickHandlerFollow = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                            withCredentials: true, headers: {
                                'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        })

                    }
                    const onClickHandlerUnFollow = () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                            withCredentials: true, headers: {
                                'API-KEY': '109cdbd6-571a-45e5-80a2-833676b0684d'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        })
                    }
                    return (
                        <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img className={classes.img}
                                                              src={u.photos.small !== null ? u.photos.small : userPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={onClickHandlerUnFollow}>Unfollow</button>
                            : <button onClick={onClickHandlerFollow}>Follow</button>}
                    </div>
                </span>
                            <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default UsersClean;