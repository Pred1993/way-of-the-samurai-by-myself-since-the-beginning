import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import profilePageReducer, {ActionProfilePageType} from './profilePage-reducer';
import messagePageReducer, {ActionMessagePageType} from './messagePage-reducer';
import sideBarReducer from './sidebar-reducer';
import {ActionUserPageType, usersPageReducer} from './usersPage-reducer';
import {ActionAuthPageType, AuthReducer} from './auth-reducer';
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagePageReducer,
  sidebar: sideBarReducer,
  usersPage: usersPageReducer,
  auth: AuthReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type ActionType = ActionUserPageType | ActionProfilePageType | ActionMessagePageType | ActionAuthPageType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    ActionType
    >

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export type StoreReduxType = typeof store;
