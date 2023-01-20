import {AppThunk} from './redux-store';
import {authApi, LoginRegisterDataType} from '../api/api';

export type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

type SetUserDataACType = ReturnType<typeof setUserData>;

export type ActionAuthPageType = SetUserDataACType;

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false, // вводим для проверки пришли или нет наши данные
};

export const authReducer = (state: InitialStateType = initialState, action: ActionAuthPageType): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.data, isAuth: action.isAuth };
    // case "UNFOLLOW":
    //     return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
    default:
      return state;
  }
};

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
  ({
    type: 'SET_USER_DATA',
    data: {
      id: id,
      login: login,
      email: email,
    },
    isAuth,
  } as const);

// export const unfollowUsers = (userID: number) => ({
//     type: "UNFOLLOW",
//     userID: userID
// }) as const

export const getAuthUserDataThunkCreator = (): AppThunk => {
  return (dispatch) => {
    authApi.authMeApi().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(response.data.data.id, response.data.data.login, response.data.data.email, true));
      }
    });
  };
};

export const loginThunkCreator = (formData: LoginRegisterDataType): AppThunk => {
  return (dispatch) => {
    authApi.login(formData).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        // dispatch(stopSubmit('login', { _error: message }));
      }
    });
  };
};

export const logoutThunkCreator = (): AppThunk => {
  return (dispatch) => {
    authApi.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};
