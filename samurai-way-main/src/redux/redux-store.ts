import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import {usersPageReducer} from "./usersPage-reducer";
import {AuthReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sidebar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)
// @ts-ignore
window.store = store

export type StoreReduxType = typeof store