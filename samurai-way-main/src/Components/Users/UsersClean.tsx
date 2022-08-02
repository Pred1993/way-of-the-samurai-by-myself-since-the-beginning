import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/naruto-218x256.png";
import {UsersType} from "../../redux/usersPage-reducer";

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
                    return (
                        <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.img} src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
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