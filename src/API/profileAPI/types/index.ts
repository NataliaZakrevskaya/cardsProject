import { UserDataType } from '../../../Redux/Actions/loginFormActions/loginFormActions';

export type UpdateUser = {
  name: string,
  avatar: string
}

export type ProfileRespType = {
  updatedUser: UserDataType
  error?: string
}