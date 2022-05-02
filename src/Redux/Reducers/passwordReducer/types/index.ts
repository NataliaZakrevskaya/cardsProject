import { passwordActions } from '../../../Actions/passwordActions/passwordActions';
import { Nullable } from '../../../../types';
import { PasswordActionsTypes } from '../../../Actions/passwordActions/types';

export type PasswordReducerActionsType = ReturnType<PasswordActionsTypes<typeof passwordActions>>
export type UserType = {
  error: string,
  email: string,
  in: string
}
export type registerStateType = {
  addedUserInfo: UserType
  error?: string;
}
export type passwordRecoveryStateType = {
  info: string,
  success: boolean,
  answer: boolean,
  html: boolean,
}
export type newPasswordStateType = {
  info: string
  error: string;
}
export type PasswordInitialStateType = {
  register: registerStateType
  passwordRecovery: passwordRecoveryStateType
  newPassword: newPasswordStateType
  e: Nullable<string>
}