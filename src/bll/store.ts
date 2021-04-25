import {counterReducer} from "./counter-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers ({
    counter:counterReducer
})

let preloderState
const persistedTodostring = localStorage.getItem('app-state')
if (persistedTodostring)
    preloderState = JSON.parse(persistedTodostring)


export const store = createStore (rootReducer,preloderState)


store.subscribe( () => {
    localStorage.setItem('app-state',JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
