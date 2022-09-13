import React from 'react';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {getProfileThunkCreator, ProfileUsersType} from '../../../redux/profilePage-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

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
        <Profile profileUsers={this.props.profileUsers} />
      </div>
    );
  }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfileThunkCreator })(WithUrlDataContainerComponent);
