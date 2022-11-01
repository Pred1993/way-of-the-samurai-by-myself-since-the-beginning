import React from 'react';

import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator, InitialStateType, logoutThunkCreator } from '../../redux/auth-reducer';
import { Header } from './Header';
import { AppStateType } from '../../redux/redux-store';
import { compose } from 'redux';

export type mapStateToPropsType = {
  data: InitialStateType;
};

type mapDispatchToPropsType = {
  getAuthUserDataThunkCreator: () => void;
  logoutThunkCreator: () => void;
};

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  data: state.auth,
});

class HeaderContainer extends React.Component<AuthContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreator();
  }

  render() {
    return (
      <Header
        data={this.props.data}
        logoutThunkCreator={this.props.logoutThunkCreator}
        getAuthUserDataThunkCreator={this.props.getAuthUserDataThunkCreator}
      />
    );
  }
}
export default compose(connect(mapStateToProps, { getAuthUserDataThunkCreator, logoutThunkCreator }))(HeaderContainer);
