import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfileThunkCreator, ProfileUsersType} from '../../redux/profilePage-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        debugger
      //if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile profileUsers={this.props}/>
            </div>
        );
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default  WithAuthRedirect(connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent));
