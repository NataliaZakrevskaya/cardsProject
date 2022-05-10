import { LoginFormActions, LoginFormInitialState } from '../loginFormActions';

export type LoginFormActionsType = ReturnType<LoginFormReducerReducerActionsTypes<typeof LoginFormActions>>
export type UserDataType = {
  avatar: string,
  created: number,
  email: string,
  isAdmin: boolean,
  name: string,
  publicCardPacksCount: number,
  rememberMe: boolean,
  token: string,
  updated: number,
  _id: string,
}

export type LoginInitialStateType = typeof LoginFormInitialState
export type LoginFormReducerReducerActionsTypes<T> = T extends { [ key: string ]: infer A } ? A : never