import React from 'react';

import { connect } from 'react-redux';
import axios from 'axios';
import { InitialStateType, setUserData } from '../../redux/auth-reducer';
import { Header } from './Header';
import { AppStateType } from '../../redux/redux-store';

export type mapStateToPropsType = {
  data: InitialStateType;
};

type mapDispatchToPropsType = {
  setUserData: (id: number, login: string, email: string) => void;
};

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  data: state.auth,
});

class HeaderContainer extends React.Component<AuthContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setUserData(response.data.data.id, response.data.data.login, response.data.data.email);
      }
    });
  }

  render() {
    return <Header data={this.props.data} />;
  }
}
export default connect(mapStateToProps, { setUserData })(HeaderContainer);
