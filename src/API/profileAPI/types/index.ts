import { UserDataType } from '../../../Redux/Actions/loginFormActions/types';

export type UpdateUser = {
  name: string,
  avatar: string
}

export type ProfileRespType = {
  updatedUser: UserDataType
  error?: string
}