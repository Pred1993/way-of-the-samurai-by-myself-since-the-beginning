import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfileThunkCreator, ProfileUsersType} from '../../redux/profilePage-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profileUsers: ProfileUsersType;
};

type mapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void;
};

type PathParamsType = {
    userId: string;
};

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileUsers: state.profilePage.profileUsers,
});

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile profileUsers={this.props}/>
            </div>
        );
    }
}

// export default WithAuthRedirect(withRouter(connect(mapStateToProps, {getProfileThunkCreator})(ProfileContainer)));

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator}),withRouter, WithAuthRedirect
)(ProfileContainer)