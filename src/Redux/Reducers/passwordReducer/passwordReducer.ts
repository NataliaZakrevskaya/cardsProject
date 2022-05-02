import { PasswordInitialStateType, PasswordReducerActionsType, UserType } from './types';
import { passwordActionsEnum } from '../../Actions/passwordActions/enums';

const passwordInitialState: PasswordInitialStateType = {
  register: {
    addedUserInfo: {} as UserType,
    error: '',
  },
  passwordRecovery: {
    info: '',
    success: false,
    answer: false,
    html: false,
  },
  newPassword: {
    info: '',
    error: '',
  },
  e: null,
};

export const passwordReducer = ( state = passwordInitialState, action: PasswordReducerActionsType ): PasswordInitialStateType => {
  switch ( action.type ) {
    case passwordActionsEnum.REGISTER_NEW_USER: {
      return { ...state, register: { ...state.register, addedUserInfo: action.payload.addedUserInfo } };
    }
    case passwordActionsEnum.SET_REGISTER_ERROR: {
      return {
        ...state, register:
          {
            ...state.register,
            error: action.payload.error,
          },
      };
    }
    case passwordActionsEnum.SET_RECOVERY_PASS_INFO: {
      return { ...state, passwordRecovery: { ...state.passwordRecovery, ...action.payload.passwordRecoveryInfo } };
    }
    case passwordActionsEnum.SET_NEW_PASS_INFO: {
      return { ...state, newPassword: action.payload.newPasswordInfo };
    }
    case passwordActionsEnum.SET_NEW_ERROR: {
      return { ...state, e: action.payload.error };
    }
    default:
      return state;
  }
};
