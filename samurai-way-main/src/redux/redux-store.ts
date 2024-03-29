import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import profilePageReducer, {ActionProfilePageType} from './profilePage-reducer';
import messagePageReducer, {ActionMessagePageType} from './messagePage-reducer';
import sideBarReducer from './sidebar-reducer';
import {ActionUserPageType, usersPageReducer} from './usersPage-reducer';
import {ActionAuthPageType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer, stopSubmit} from 'redux-form';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagePageReducer,
  sidebar: sideBarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type ActionType =
  | ActionUserPageType
  | ActionProfilePageType
  | ActionMessagePageType
  | ActionAuthPageType
  | ReturnType<typeof stopSubmit>;

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export type StoreReduxType = typeof store;
