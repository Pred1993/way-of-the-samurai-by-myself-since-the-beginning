import {combineReducers, EmptyObject, legacy_createStore as createStore, Store} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import {ActionType, MessagesPageType, ProfilePageType} from "./store";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sidebar: sideBarReducer
})

export type StoreReduxType = Store<EmptyObject & {profilePage: ProfilePageType, messagesPage: MessagesPageType, sidebar: any}, ActionType>
export let store: StoreReduxType = createStore(reducers)