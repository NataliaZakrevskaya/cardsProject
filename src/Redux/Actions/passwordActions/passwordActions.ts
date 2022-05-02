import {
  newPasswordStateType,
  passwordRecoveryStateType,
  registerStateType,
} from '../../Reducers/passwordReducer/types';
import { passwordActionsEnum } from './enums';

export const passwordActions = {
  registerNewUserAC: ( addedUserInfo: registerStateType ) => {
    return {
      type: passwordActionsEnum.REGISTER_NEW_USER,
      payload: addedUserInfo,
    } as const;
  },
  setRegisterErrorAC: ( error: string ) => {
    return {
      type: passwordActionsEnum.SET_REGISTER_ERROR,
      payload: { error },
    } as const;
  },
  setRecoveryPassInfoAC: ( passwordRecoveryInfo: passwordRecoveryStateType ) => {
    return {
      type: passwordActionsEnum.SET_RECOVERY_PASS_INFO,
      payload: { passwordRecoveryInfo },
    } as const;
  },
  setInfoNewPassAC: ( newPasswordInfo: newPasswordStateType ) => {
    return {
      type: passwordActionsEnum.SET_NEW_PASS_INFO,
      payload: { newPasswordInfo },
    } as const;
  },
  setNewErrorAC: ( error: string ) => {
    return {
      type: passwordActionsEnum.SET_NEW_ERROR,
      payload: { error },
    } as const;
  },
};
