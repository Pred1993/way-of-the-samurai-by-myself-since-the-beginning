import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sidebar: sideBarReducer
})


export let store = createStore(reducers)