import {AppThunk} from './redux-store';
import {authApi} from '../api/api';
import {setUserData} from "./auth-reducer";

let initialState = {
  initialized: false, // вводим для проверки проинициализированы мы изначально или нет
};

export const appReducer = (state: InitialStateType = initialState, action: ActionAppType): InitialStateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return {...state, initialized: action.initialized};
    default:
      return state;
  }
};

//action
export const initializedSuccess = (initialized: boolean) =>
  ({
    type: 'SET_INITIALIZED',
    initialized: initialized
  } as const);

//thunk
export const initializedSuccessThunkCreator = (): AppThunk => {
  return (dispatch) => {
    authApi.authMeApi()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserData(response.data.data.id, response.data.data.login, response.data.data.email, true));
        }
      })
      .finally(() => {
        dispatch(initializedSuccess(true));
      });
  };
};

//types
export type InitialStateType = typeof initialState
type InitializedSuccessACType = ReturnType<typeof initializedSuccess>;
type SetUserDataACType = ReturnType<typeof setUserData>;

export type ActionAppType = InitializedSuccessACType | SetUserDataACType;