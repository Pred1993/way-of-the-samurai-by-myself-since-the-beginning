import React from 'react';

import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator, InitialStateType } from '../../redux/auth-reducer';
import { Header } from './Header';
import { AppStateType } from '../../redux/redux-store';

export type mapStateToPropsType = {
  data: InitialStateType;
};

type mapDispatchToPropsType = {
  getAuthUserDataThunkCreator: () => void;
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
    return <Header data={this.props.data} />;
  }
}
export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(HeaderContainer);
