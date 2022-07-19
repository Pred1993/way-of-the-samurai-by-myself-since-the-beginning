import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarReducer from "./sidebar-reducer";


let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sidebar: sideBarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer)

export type StoreReduxType = typeof store