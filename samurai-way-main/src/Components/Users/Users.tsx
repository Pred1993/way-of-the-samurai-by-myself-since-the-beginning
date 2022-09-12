import React from 'react';
import { mapDispatchToPropsType, mapStateToPropsType } from './Users.Container';
import classes from './Users.module.css';
import axios from 'axios';
import { UsersType } from '../../redux/usersPage-reducer';
import userPhoto from '../../assets/images/naruto-218x256.png';

// type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

// type GetUsersResponseType = {
//   items: Array<UsersType>;
//   totalCount: number;
//   error: string | null;
// };
// const Users = (props: UsersPropsType) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
//         props.setUsers(response.data.items);
//       });
//     }
//   };
//
//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => {
//         return (
//           <div key={u.id}>
//             <span>
//               <div>
//                 <img className={classes.img} src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
//               </div>
//               <div>
//                 {u.followed ? (
//                   <button
//                     onClick={() => {
//                       props.unfollowUsers(u.id);
//                     }}
//                   >
//                     Unfollow
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       props.followUsers(u.id);
//                     }}
//                   >
//                     Follow
//                   </button>
//                 )}
//               </div>
//             </span>
//             <span>
//               <span>
//                 <div>{u.name}</div>
//                 <div>{u.status}</div>
//               </span>
//               <span>
//                 {/*<div>{u.location.country}</div>*/}
//                 {/*<div>{u.location.city}</div>*/}
//               </span>
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//
// export default Users;
