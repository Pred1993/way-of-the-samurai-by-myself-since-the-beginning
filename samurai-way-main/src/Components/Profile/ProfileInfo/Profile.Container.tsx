import React from 'react';
import {Profile} from "../Profile";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileUsersType, setProfileUsers} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import axios from "axios";

type mapStateToPropsType = {
    profileUsers: ProfileUsersType
}

type mapDispatchToPropsType = {
    setProfileUsers: (profileUsers: ProfileUsersType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileUsers: state.profilePage.profileUsers
})


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfileUsers(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
};

export default connect(mapStateToProps, {setProfileUsers})(ProfileContainer);

