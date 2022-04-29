import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { meReducer, MeReducerActionsType } from '../Reducers/meReducer/meReducer';
import { profileReducer, ProfileActionsType } from '../Reducers/profileReducer/ProfileReducer';
import { LoginFormActionsType, loginReducer } from '../Reducers/loginFormReducer/loginReducer';
import {
  passwordReducer,
  PasswordActionsType,
} from '../Reducers/passwordReducer/passwordReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppActionsType, appReducer } from '../Reducers/appReducer/appReducer';
import { packsReducer, packsActionsType } from '../Reducers/packsReducer/packsReducer';
import { cardsReducer } from '../Reducers/cardsReducer/cardsReducer';

const rootReducer = combineReducers( {
  me: meReducer,
  profile: profileReducer,
  login: loginReducer,
  app: appReducer,
  passwordRegister: passwordReducer,
  packs: packsReducer,
  cards: cardsReducer,
} );

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore( rootReducer, applyMiddleware( thunk ) );
type AppStateActionsType =
  packsActionsType
  | AppActionsType
  | PasswordActionsType
  | ProfileActionsType
  | MeReducerActionsType
  | LoginFormActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
  AppStateType,
  unknown,
  AppStateActionsType>

//@ts-ignore
window.store = store;