import {combineReducers, createStore} from "redux";
import {enteringANewPasswordReducer} from "./reducers/EnteringANewPassword-Reducer";
import {loginReducer} from "./reducers/Login-Reducer";
import {passwordRecoveryReducer} from "./reducers/PasswordRecovery-Reducer";
import {profileReducer} from "./reducers/Profile-Reducer";
import {registerReducer} from "./reducers/Register-Reducer";

const rootReducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringANewPassword: enteringANewPasswordReducer
})

const store = createStore(rootReducers)
export default store

export type AppStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store
