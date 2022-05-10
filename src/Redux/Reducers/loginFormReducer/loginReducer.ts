import {
  LoginFormInitialState,
  LoginFormReducer,
} from '../../Actions/loginFormActions/loginFormActions';
import { LoginFormActionsType, LoginInitialStateType } from '../../Actions/loginFormActions/types';

export const loginReducer = ( state: LoginInitialStateType = LoginFormInitialState, action: LoginFormActionsType ): LoginInitialStateType => {
  switch ( action.type ) {
    case LoginFormReducer.LOGIN_USER:
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    case LoginFormReducer.SET_USER_DATA:
      return { ...state, user: action.payload.userData };
    case LoginFormReducer.SET_ERROR: {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};
